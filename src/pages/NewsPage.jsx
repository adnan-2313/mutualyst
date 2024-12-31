import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { endpoints } from "@/utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { addEndPoint } from "@/slices/stocksSlice";

const NewsPage = () => {
  const trendingStocks = useSelector(
    (store) => store.stocks.trendingStocks?.trending_stocks
  );

  const selectedEndPoint = useSelector((store) => store.stocks?.endPoint);

  console.log(selectedEndPoint);
  const dispatch = useDispatch();
  
  const handleClick = (item) => {
    dispatch(addEndPoint(item));
  };


  return (
    <section className="md:ml-56">
      <div className="w-full mx-auto pt-20 max-w-[90rem]  flex background-dark   text-start flex-col  pb-4    ">
        <div className="py-12  flex justify-center -mt-5    whitespace-nowrap  ">
          <h2 className="text-4xl border-b-2 border-zinc-600 sm:text-[4rem] my-10 gradient-title underline">
            Latest Stocks News
          </h2>
        </div>
        <div className="mb-12 mx-3 sm:mx-10">
          <ul className="flex gap-2 flex-wrap ">
            {endpoints.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`flex px-3 items-center justify-center py-1 rounded-xl cursor-pointer ${
                    item.path === selectedEndPoint
                      ? "bg-black text-white"
                      : "dark:bg-zinc-800 dark:text-gray-200 bg-zinc-50 text-black"
                  }`}
                  onClick={() => handleClick(item.path)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex  flex-col   max-sm:gap-4 mb-4 -mt-10  sm:flex-col">
          <div className="w-full max-sm:px-4 sm:pl-8  ">
            <div className="flex mt-5 sm:pr-2 flex-wrap w-full gap-2">
              {trendingStocks?.top_losers?.map((item) => {
                return (
                  <Card
                    className=" border-none w-[400px] bg-zinc-200 dark:bg-zinc-800  dark:text-white   "
                    key={item.ticker_id}
                  >
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
            <div className="flex mt-5 flex-wrap justify-center items-center gap-2 w-full ">
              {trendingStocks?.top_gainers?.map((item) => {
                return (
                  <Card
                    className="dark:bg-zinc-800 border-none bg-zinc-200  w-[400px] dark:text-white dark:border-zinc-600"
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

export default NewsPage;
