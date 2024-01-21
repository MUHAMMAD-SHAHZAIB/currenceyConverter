import { useEffect, useState } from "react";

let CurrencyURL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(`${CurrencyURL}${currency}.json`);
      const apiData = await response.json();
      setData(apiData[currency]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useCurrencyInfo;
