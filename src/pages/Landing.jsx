import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const heading = user ? (
    <>
      <img
        src={user?.imageUrl || "https://via.placeholder.com/150"}
        className="dark:border-none border shadow-lg border-zinc-300 h-56 rounded-full"
        alt={`${user?.firstName || "Guest"}'s Avatar`}
      />
      <h2 className="gradient-title leading-[40px] md:leading-[75px] text-5xl md:text-[6rem] items-center justify-center text-center font-extrabold">
        {user?.firstName}
      </h2>
    </>
  ) : (
    <h1 className="gradient-title leading-[40px] md:leading-[75px] text-5xl md:text-[6rem] items-center justify-center text-center font-extrabold">
      Please Login
      <br />
      To Get Access
    </h1>
  );

  return (
    <section className="flex mx-auto justify-center">
      <main className="flex flex-col sm:pl-8 md:ml-52 justify-center items-center pt-32 pb-20">
        {heading}
        <div className="mt-4 sm:mt-10 flex sm:gap-4 gap-2 items-center max-sm:flex-col">
          <Button
            variant="secondary"
            onClick={() => navigate("/trends")}
            className="border border-zinc-800 dark:border-zinc-100 flex bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 px-10 py-5 sm:py-6 md:text-lg"
          >
            See Trends <ChevronRight />
          </Button>
          <Button
            onClick={() => navigate("/post")}
            className="bg-black hover:bg-zinc-900 hover:text-white text-white border-zinc-800 dark:border-zinc-100 px-12 py-5 md:py-6 md:text-lg"
          >
            Post A Trend
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Landing;
