import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const OnBoarding = () => {
  const { user, isLoaded } = useUser();

  const navigate = useNavigate();
  const handleRoleSelection = async (role) => {
    await user
      .update({
        unsafeMetadata: { role },
      })
      .then(() => {
        navigate(role === "SEBI Registered" ? "/community" : "/");
      })
      .catch((err) => {
        console.error("Error updating role:", err);
      });
  };

  useEffect(() => {
    if (user?.unsafeMetadata.role) {
      navigate(
        user?.unsafeMetadata.role === "SEBI Registered" ? "/community" : "/"
      );
    }
  }, [user]);

  if (!isLoaded) {
    return (
      <div className="w-full flex justify-center items-center">
        <SyncLoader className="m-auto" width={"100%"} color="#36d7b7" />;
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">
        I am a...
      </h2>
      <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
        <Button
          variant="blue"
          className="h-36 text-xl"
          onClick={() => handleRoleSelection("SEBI Registered")}
        >
          SEBI Registered
        </Button>
        <Button
          variant="destructive"
          className="h-36 text-xl"
          onClick={() => handleRoleSelection("SEBI NoN-Registered")}
        >
          SEBI NoN-Registered
        </Button>
      </div>
    </div>
  );
};

export default OnBoarding;
