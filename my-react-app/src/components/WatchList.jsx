import "../index.css";
import StockCard from "./StockCard.jsx";

export default function WatchList(){
    return(
        <div className="border-2 border-red-500 w-[40%] flex flex-col">
            <div className="text-white text-2xl flex justify-center items-center">
                WatchList
            </div>
            <StockCard company="AAPL"/>
            <StockCard company="MSFT"/>
            <StockCard company="NVDA"/>       
            <StockCard company="TSLA"/>
            <StockCard company="GOOGL"/>
            <StockCard company="AMZN"/>
            <StockCard company="META"/>       
            <StockCard company="XOM"/>   
        </div>
    )
}