import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

const Landing = () => {
  return (
    <section>
      <main className="flex flex-col justify-center items-center mt-20">
        <h1 className="gradient-title leading-[40px]  md:leading-[80px] text-5xl text-6xl md:text-[6rem] items-center justify-center text-center font-extrabold">
          Streamline Your
          <br />
          Investment
          <br />
          With Mutualyst
        </h1>
        <p className="text-zinc-300 font-semibold text-sm md:text-lg w-full max-sm:px-10 md:w-2/3 text-center mt-3">
          The best investment you can make is in the tools that help you stay
          ahead of the market. Let Mutualyst guide you to smarter decisions.
        </p>
        <div className="mt-4 sm:mt-10 flex gap-4 items-center">
          <Button variant="secondary" className="md:px-10 md:py-6 md:text-lg">
            Get Started <ChevronRight />{" "}
          </Button>
          <Button className="bg-black border-zinc-800 border md:px-10 py-5 md:py-6 md:text-lg">
            More Details
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Landing;
