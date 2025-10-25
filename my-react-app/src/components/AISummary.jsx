import "../index.css";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function AISummarry({URL}){
    const [response, SetResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async ()=>{
        try {
            if(!URL) throw new Error("No URL provided");
            console.log(URL);
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_AI_BACKEND_URL}/generate`,{
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({ url: URL })
            })

            const data = await response.json();
            SetResponse(data.text);
            console.log(data.text);

        } catch (error) {
            console.error("Failed to fetch:", error);
        }finally{
            setLoading(false);
        }

        }

        fetchData();
    }
    ,[URL])

    if(loading){
        return(
            <div className="border-2 border-green-500 w-full h-full text-white flex items-center justify-center">
                <p className="animate-pulse">Loading summary...</p>
            </div>
        )
    }
    

    return(
        <>
            <h1 className="flex justify-center text-white font-bold text-2xl bg-[#1c0357]">Article Summary</h1>
            <div className="w-full h-full p-4 text-white overflow-y-auto overflow-hidden bg-black">
                 <ReactMarkdown>{response}</ReactMarkdown>
            </div>
        </>
    )
}