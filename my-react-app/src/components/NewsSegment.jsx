import { useEffect, useState } from "react"
import "../index.css"
import NewsCards from "./NewsCard"

export default function NewsSegment({company, setArticleURL}){

    return(
        <>
            <div className="flex flex-col overflow-y-auto overflow-hidden h-full">
                <h1 className="text-white text-2xl flex justify-center sticky top-0 bg-[#1c0357]">Company News ({company})</h1>
                <NewsCards company={company} setArticleURL={setArticleURL}/>
            </div>
        
        </>
    )

}
