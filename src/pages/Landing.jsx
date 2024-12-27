import { Button } from "@/components/ui/button";

import { ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
const Landing = () => {
  const trendingStocks = useSelector((store) => store.stocks.trendingStocks);

  console.log(trendingStocks?.trending_stocks);
  return (
    <section>
      <main className="flex flex-col justify-center items-center pt-32 pb-20 ">
        <h1 className="gradient-title leading-[40px]  md:leading-[80px] text-5xl sm:text-6xl md:text-[6rem] items-center justify-center text-center font-extrabold">
          Streamline Your
          <br />
          Investment
          <br />
          With Mutualyst
        </h1>
        <p className="text-zinc-700 dark:text-zinc-300 font-semibold text-sm md:text-lg w-full max-sm:px-10 md:w-2/3 text-center mt-3">
          The best investment you can make is in the tools that help you stay
          ahead of the market. Let Mutualyst guide you to smarter decisions.
        </p>
        <div className="mt-4 sm:mt-10 flex sm:gap-4 gap-2 items-center max-sm:flex-col">
          <Button
            variant="secondary"
            className="border border-zinc-800  flex  dark:border-none bg-zinc-100 text-black  hover:bg-zinc-100 px-10 py-5 sm:py-6 md:text-lg"
          >
            Get Started <ChevronRight />{" "}
          </Button>
          <Button className="bg-black hover:bg-zinc-900 hover:text-white text-white  border-zinc-800 border px-12 py-5 md:py-6 md:text-lg">
            More Details
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Landing;
