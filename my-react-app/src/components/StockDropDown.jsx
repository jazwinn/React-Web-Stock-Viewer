import { useEffect, useState } from "react";
import "../index.css"
import StockCurrent from "./StockCurrent";

export default function StockDropDown(){

    const [SymbolData, SetData] = useState(null); // first is value, second is the setter for the value
    const [selectedSymbol, SetSymbol] = useState("AAPL");
    const options = [
    "AAPL", "TSLA", "MSFT", "GOOGL", "AMZN", "FB", "NVDA", "NFLX", "BABA", "INTC",
    "ADBE", "PYPL", "CSCO", "ORCL", "IBM", "CRM", "AMD", "UBER", "LYFT", "SQ",
    "SHOP", "SPOT", "DIS", "V", "MA", "KO", "PEP", "NKE", "PFE", "MRNA",
    "XOM", "CVX", "WMT", "T", "VZ", "MCD", "BA", "GM", "F", "GE",
    "TSM", "QCOM", "TXN", "INTU", "NOW", "ISRG", "MDLZ", "ABNB", "ZM", "DOCU"
  ];
    const apikey = import.meta.env.VITE_FINNHUB_API_KEY;

    // useEffect(() => {
    //     const fetchData = async () => {
    //     try {
    //         const url = `${import.meta.env.VITE_FINNHUB_SYMBOL_URL}?symbol=US&token=${apikey}`;
    //         const response = await fetch(url);
    //         const json = await response.json();
    //         SetData(json);
    //         console.log(json);

    //     } catch (error) {
    //         console.error("Failed to fetch:", error);
    //     }
    //     };

    //     fetchData();
    // }, [apikey]);
    

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <StockCurrent company={selectedSymbol}/>
                <select
          className="p-2 rounded-md border border-gray-300"
          value={selectedSymbol}
          onChange={(e) => SetSymbol(e.target.value)}
        >
        {options.map((symbol) => (
          <option key={symbol} value={symbol}>
            {symbol}
          </option>
        ))}
      </select>
      </div>
    </>
  );


}



