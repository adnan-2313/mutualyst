import { useState, useEffect } from "react";
import { addTrendingStocks } from "../slices/stocksSlice";
import { useDispatch } from "react-redux";
const useFetchStocks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStocks = async () => {
      const url = "https://indian-stock-exchange-api2.p.rapidapi.com/trending";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e0103e5b48msh143cb899a300a30p1bebbcjsn92f24c55e0ce", // Use environment variable
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

    fetchStocks();
  }, []); // Empty dependency array ensures this runs only once
};

export default useFetchStocks;
