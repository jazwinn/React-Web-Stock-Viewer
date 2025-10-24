import "../index.css";

export default function LinkButton({url, image}){

    return (
        <>
            <div className="group">
            <button
            onClick={()=>window.open(url, "blank")}
            className="
                grid 
                place-items-center
                bg-[#d7dadd]
                rounded-xl
                shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),_-6px_-6px_10px_-1px_rgba(255,255,255,0.7)]
                border border-transparent
                cursor-pointer
                transition-transform duration-500
                hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),_-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)]
                group-hover:border-[rgba(0,0,0,0.1)]
                group-hover:translate-y-1
                
            "
            >
            <svg className="fill-[#0092E4] transition-transform duration-500 group-hover:scale-90 group-hover:fill-[#000000]" 
            width="60" height="60" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="svg">
               <path d={image}/>
            </svg>
            </button>
            </div>

        
        </>
    );
}
