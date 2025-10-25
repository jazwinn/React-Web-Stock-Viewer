import { useEffect, useState } from "react";
import "../index.css"

export default function StockCard({company, onClick}){

    const [quoteData, SetQuoteData] = useState(null); // first is value, second is the setter for the value
    const [profileData, SetProfileData] = useState(null); // first is value, second is the setter for the value
    const apikey = import.meta.env.VITE_FINNHUB_API_KEY;

    useEffect(() => {
        const fetchData = async () => {
        try {
            const url = `${import.meta.env.VITE_FINNHUB_QUOTE_URL}?symbol=${company}&token=${apikey}`;
            const response = await fetch(url);
            const json = await response.json();
            SetQuoteData(json);
            console.log(json);

            const url2 = `${import.meta.env.VITE_FINNHUB_PROFILE_URL}?symbol=${company}&token=${apikey}`;
            const response2 = await fetch(url2);
            const json2 = await response2.json();
            SetProfileData(json2);
            console.log(json2);

        } catch (error) {
            console.error("Failed to fetch:", error);
        }
        };

        fetchData();
    }, [company, apikey]);// callback when comapny and key changes
    
    if (!quoteData) return <div>Loading...</div>;

  return (
    <>
            <div className="flex flex-col w-full">
            <div className="flex flex-row text-white hover:backdrop-brightness-125" onClick={onClick}>
                <div className="p-1.5 w-full">
                    {company}
                    <div className="text-[50%]">
                        {profileData?.name ?? "..."}            
                    </div>
                </div>

                <div className="flex gap-3 pr-3 items-baseline flex-row justify-end ml-auto p-1.5 w-full">
                    ${quoteData?.c ?? "..."}
                    <div className={`p-1 rounded w-16
                    ${quoteData?.d >= 0 ? "bg-green-500 text-white" : "bg-red-500 text-white" ?? "..."}
                    `}>
                    <p className="pl-1 m-0.5">{quoteData?.d >= 0 ? `+${quoteData.d}` : `${quoteData.d}` ?? "..."}</p>
                    </div>
                    
                </div>
            </div>
            <hr className="border-t border-gray-500 w-full" />
        </div>
    </>

  );


}



