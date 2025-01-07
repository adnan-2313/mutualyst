import { useSession } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

const useFetch = (cb, options = {}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { session, isLoaded } = useSession();

  // Wait for Clerk session to load completely
  useEffect(() => {
    if (isLoaded && session) {
      console.log("Session loaded");
    }
  }, [isLoaded, session]);

  // Prevent API call if session is not loaded
  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    if (!isLoaded || !session) {
      setError("Session is not loaded yet");
      setLoading(false);
      return;
    }

    try {
      const supabaseAccessToken = await session.getToken({
        template: "supabase",
      });

      const response = await cb(supabaseAccessToken, options, ...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { fn, data, loading, error };
};

export default useFetch;
