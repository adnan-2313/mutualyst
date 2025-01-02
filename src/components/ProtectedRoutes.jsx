import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();

  // Redirect to sign-in if not signed in
  if (isLoaded && !isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  // Redirect to onboarding if role metadata is missing
  if (
    isLoaded &&
    user &&
    !user.unsafeMetadata?.role &&
    pathname !== "/onboarding"
  ) {
    return <Navigate to="/onboarding" />;
  }

  // Render children if checks pass
  return children;
};

export default ProtectedRoutes;
