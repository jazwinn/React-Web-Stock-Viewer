import "../index.css";

export default function TextButton({text, url}){

    return (
        <>
            <button
            onClick={()=>{window.open(url,"blank")}}
            className="cursor-pointer bg-transparent relative text-black inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 rounded-md px-3"
            >
            {text}
            </button>
        </>
    );
}
