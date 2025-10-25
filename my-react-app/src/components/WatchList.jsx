import "../index.css";
import StockCard from "./StockCard.jsx";

export default function WatchList({onSend}){

    const companies = [
    "AAPL",   // Apple
    "MSFT",   // Microsoft
    "NVDA",   // NVIDIA
    "TSLA",   // Tesla
    "GOOGL",  // Alphabet (Google)
    "AMZN",   // Amazon
    "META",   // Meta (Facebook)
    "XOM",    // ExxonMobil
    "JNJ",    // Johnson & Johnson
    "V",      // Visa
    "WMT",    // Walmart
    "JPM",    // JPMorgan Chase
    "PG",     // Procter & Gamble
    "DIS",    // Disney
    "NFLX"    // Netflix
    ];

    return(
        <div className="w-[40%] flex flex-col overflow-y-auto overflow-hidden">
            <div className="text-white text-2xl flex justify-center items-center sticky top-0 bg-[#1c0357]">
                WatchList
            </div>
            {companies.map((company) => (
            <StockCard
                key={company}
                company={company}
                onClick={() => onSend(company)}  
            />
            ))} 
        </div>
    )
}