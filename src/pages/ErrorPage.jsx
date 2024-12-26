import { Button } from "@/components/ui/button";
import { FlagIcon, FlagOffIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex gap-2 sm:gap-3 justify-center text-3xl sm:text-5xl font-bold  text-center text-black dark:text-white flex-col items-center mt-52">
      <div className="">
        <FlagOffIcon className="" size="10rem" />
      </div>
      Oops Your at wrong Page
      <p className="text-zinc-500 font-light text- text-3xl">
        we are working with this page
      </p>
      <Button>
        <NavLink to="/">Go Back To Home</NavLink>
      </Button>
    </section>
  );
};

export default ErrorPage;
