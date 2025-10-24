import { useEffect, useState } from "react";
import "../index.css"

export default function StockCurrent({company}){

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
    


  return (
    <div
      onClick={()=>window.open(profileData.weburl,"blank")}
      className="font-mono text-white group cursor-pointer relative overflow-hidden bg-[#DCDFE4] w-60 h-50 dark:bg-[#22272B] rounded-3xl p-4 hover:w-100 hover:h-60 hover:bg-blue-200 hover:dark:bg-[#0C66E4]"
    >
      <div className="text-lg text-center">
        <p className="mb-0">{company}</p>
        <p className="mt-0">{profileData?.name ?? "..."}</p>
      </div>

      {/* <img
        className="mx-auto"
        src={profileData?.logo}
        alt="company logo"
        width={30}
        height={30}
      /> */}
      <div className="gap-4 relative">
        <h4
          className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 text-2xl text-center group-hover:translate-x-8 group-hover:translate-y-5 group-hover:scale-130"
        >
          ${quoteData?.c?.toFixed(2) ?? "..."}{profileData?.currency ?? ""}
          <p className={quoteData?.d>0 ? "text-green-500" : quoteData?.d<0 ? "text-red-500" :  "text-white"}>{quoteData?.d ?? "..."}</p>
        </h4>
        
      </div>
      
      
      <div className="absolute duration-300 -left-32 bottom-[75px] text-2x1 mt-2 group-hover:left-14">
        <p className="text-l">O:{quoteData?.o ?? "..."}</p>
        <p className="text-l">H:{quoteData?.h ?? "..."}</p>
        <p className="text-l">L:{quoteData?.l ?? "..."}</p>
      </div>
    </div>
  );


}



