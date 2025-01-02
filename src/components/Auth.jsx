import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSession } from "@/slices/appConfigSlice";

const supabase = createClient(
  "https://rnmoscsnwupsknlkndie.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJubW9zY3Nud3Vwc2tubGtuZGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzNjUwNjEsImV4cCI6MjA1MDk0MTA2MX0.nlmihk1Zufk0UrsWvEFK1dyTfohaE6MIDpc1BvikaKU"
);

const AuthComponent = ({ AuthOn, setAuthOn }) => {
  const session = useSelector((state) => state.appConfig.session);
  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSession(session));
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setSession(session));
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <section
      onClick={() => setAuthOn(false)}
      className="fixed w-full h-[200vh] z-[500] bg-black bg-opacity-60 flex justify-center py-20 max-sm:px-8"
    >
      <div className="bg-zinc-900 w-[400px] mb-10 h-[600px] pt-8 px-8">
        <Auth
          className="h-[300px]"
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google", "facebook", "twitter"]}
        />
      </div>
    </section>
  );
};

export default AuthComponent;
