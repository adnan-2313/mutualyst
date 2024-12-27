import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
const Landing = () => {
  const trendingStocks = useSelector(
    (store) => store.stocks.trendingStocks?.trending_stocks
  );

  console.log(trendingStocks);
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
      <div className="w-full max-w-[90rem] flex   text-start flex-col  bg-[#b6b6c2] dark:bg-zinc-950  overflow-x-hidden">
        <div className="py-12  flex justify-center -mt-5   whitespace-nowrap  ">
          <h2 className="text-4xl border-b-2 sm:text-[4rem] gradient-title underline">
            Latest Stocks News
          </h2>
        </div>
        <div className="flex  flex-col  max-sm:gap-4 mb-4 -mt-10  sm:flex-row">
          <div className="w-full max-sm:px-4 sm:pl-8  ">
            <div className="w-full text-end flex   sm:justify-end">
              <h1 className="text-xl sm:text-4xl sm:w-1/3 border-b-2 pr-1 text-zinc-900 dark:text-zinc-300 text-end pb-2 font-bold ">
                Top Losers
              </h1>
            </div>
            <div className="flex mt-5 sm:pr-2 flex-col w-full gap-2">
              {trendingStocks?.top_losers?.map((item) => {
                return (
                  <Card className="dark:bg-zinc-900 border-none bg-zinc-100 dark:text-white dark:border-zinc-600  w-full" key={item.ticker_id}>
                    <CardHeader>
                      <CardTitle className="flex justify-between font-light">
                        {item.company_name}
                        <span className="text-sm">&#8377; {item?.price}</span>
                      </CardTitle>
                      <h2 className="text-sm">{item?.date}</h2>
                    </CardHeader>
                    <CardContent className="flex max-sm:text-xs  justify-between">
                      <span className="">
                        Long term trend : {item?.long_term_trends} {"   "}
                      </span>
                      Short term trend : {item?.short_term_trends}
                      <span className="">
                        Exchange_type : {item?.exchange_type}
                      </span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          <div className="w-full max-sm:px-4 sm:pr-8   ">
            <h1 className="text-xl sm:text-4xl max-sm:ml-2 w-1/3 pl-2 pb-2 border-b-2 sm:border-l-2 text-zinc-900 dark:text-zinc-300   font-bold ">
              Top Gainers
            </h1>
            <div className="flex mt-5 flex-wrap gap-2 w-full ">
              {trendingStocks?.top_gainers?.map((item) => {
                return (
                  <Card
                    className="dark:bg-zinc-900 border-none bg-zinc-100 w-full dark:text-white dark:border-zinc-600"
                    key={item.ticker_id}
                  >
                    <CardHeader>
                      <CardTitle className=" flex justify-between  font-light">
                        {item.company_name}
                        <span className="text-sm">&#8377; {item?.price}</span>
                      </CardTitle>
                      <h2 className="text-sm">{item?.date}</h2>
                    </CardHeader>
                    <CardContent className="flex justify-between max-sm:text-xs ">
                      <span className="">
                        Long term trend : {item?.long_term_trends}
                      </span>
                      <span className="">
                        Short term trend : {item?.short_term_trends}
                      </span>
                      <span className="">
                        Exchange_type : {item?.exchange_type}
                      </span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
