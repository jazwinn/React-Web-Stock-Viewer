import { useEffect, useState } from "react"
import "../index.css"

export default function NewsCards({company, setArticleURL}){
    const [data, SetData] = useState(null);
    const apikey = import.meta.env.VITE_FINNHUB_API_KEY;

    const today = new Date().toISOString().slice(0,10);
    const fromDate = new Date(today);
    fromDate.setMonth(fromDate.getMonth()-3); // Get the last 3 months
    const from = fromDate.toISOString().slice(0,10);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
            const url = `${import.meta.env.VITE_FINNHUB_NEWS_URL}?symbol=${company}&from=${from}&to=${today}&token=${apikey}`;
            console.log(url);        
            const response = await fetch(url);
            const buffer = await response.arrayBuffer();
            const text = new TextDecoder("utf-8").decode(buffer);
            const json = JSON.parse(text);
            SetData(json);
            console.log(json);

        } catch (error) {
            console.error("Failed to fetch:", error);
        }
        }

        fetchData();
    }
    ,[company, apikey])
    
    
    return(
        <>  
            {data?.map((item, index) =>(
                <div key={item.id || index} className="text-white flex flex-row hover:backdrop-brightness-125" onClick={()=>{setArticleURL(item?.url ?? "")}}>
                    <img className="h-auto w-40 object-contain" src={item?.image ?? "..."}/>
                    <div className="flex flex-col pl-2 items-baseline">
                        <h2 className="pt-1 text-[50%]">{item?.datetime ? new Date(item.datetime * 1000).toLocaleString() : "..."}</h2>
                        <h1 className="text-[80%] font-bold hover:cursor-pointer" onClick={()=>{window.open(item?.url, "blank")}}>{item?.headline ?? "..."}</h1>
                        <p className="text-[60%]">{item?.summary}</p>
                    </div>
                    
                </div>
                
            )) ?? "Loading..."}
            
        </>
    )
}