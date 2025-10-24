import { useEffect, useState } from "react";
import StockCurrent from "./StockCurrent";
import "../index.css"

export default function SideCard(){




    return(
        <>
        <div        
        className="
        flex flex-row 
        items-start 
        gap-4 
        p-4
        bg-transparent
        scale-[2]
        origin-top-left
        "
        >
          <StockCurrent company="AAPL"></StockCurrent>
          <StockCurrent company="AAPL"></StockCurrent>
          <StockCurrent company="AAPL"></StockCurrent>
          <StockCurrent company="AAPL"></StockCurrent>
          <StockCurrent company="AAPL"></StockCurrent>
          <StockCurrent company="AAPL"></StockCurrent>
          <StockCurrent company="AAPL"></StockCurrent>
        </div>
        </>
    )
}