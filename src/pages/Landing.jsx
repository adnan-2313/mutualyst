import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plansList } from "@/utils/constant";
import { ChevronRight } from "lucide-react";

const Landing = () => {
  return (
    <section>
      <main className="flex flex-col justify-center items-center pt-32 sm:pt-20 ">
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
        <div className="mt-4 sm:mt-10 flex gap-4 items-center">
          <Button variant="secondary" className="border  dark:border-none bg-white text-black md:px-10 py-4 md:py-6 md:text-lg">
            Get Started <ChevronRight />{" "}
          </Button>
          <Button className="bg-black hover:bg-zinc-900 hover:text-white text-white  border-zinc-800 border md:px-10 py-4 md:py-6 md:text-lg">
            More Details
          </Button>
        </div>
      </main>
      <div className="w-full bg-zinc-200 bg-opacity-50 dark:bg-zinc-950 p-4 mt-14">
        <div className="flex flex-col">
          <h2 className="text-4xl sm:text-5xl text-zinc-950 dark:text-zinc-300 mx-auto font-extrabold">
            What we Offers?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {plansList.map((item) => {
              return (
                <Card
                  className="dark:bg-zinc-950 w-[300px]  dark:text-white dark:border-zinc-600"
                  key={item.id}
                >
                  <CardHeader>
                    <CardTitle className="text-3xl">{item.title}</CardTitle>
                    <CardDescription>
                      &#8377;{item.price} / month
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="">
                      {item.features.map((feat) => {
                        return (
                          <li className="py-1 max-sm:text-sm" key={feat}>
                            {feat}
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full dark:border-zinc-300 border-zinc-500 text-black dark:text-white">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
