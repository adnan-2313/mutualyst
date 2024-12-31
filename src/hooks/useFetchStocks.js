import { useEffect } from "react";
import { addTrendingStocks } from "../slices/stocksSlice";
import { useDispatch, useSelector } from "react-redux";

const useFetchStocks = () => {
  const dispatch = useDispatch();
  const trendingStocks = useSelector(
    (store) => store.stocks.trendingStocks?.trending_stocks
  );
  const fetchStocks = async () => {
    const url = "https://indian-stock-exchange-api2.p.rapidapi.com/trending";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "6d445a4968mshb2bbe3fa38d8f58p12b1bdjsn23f4fa688419", // Use environment variable
        "x-rapidapi-host": "indian-stock-exchange-api2.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      dispatch(addTrendingStocks(result));
      // console.log(result);
    } catch (err) {
      console.log(err.message);
    } finally {
      // console.log(false);
    }
  };
  useEffect(() => {
    !trendingStocks && fetchStocks();
  }, []); // Empty dependency array ensures this runs only once
};

export default useFetchStocks;
