import "../index.css"

export default function NewsCard(){


    return(
        <>
            <aside class="bg-black text-white p-6 rounded-lgmax-w-lg font-mono ">
            <div class="flex justify-between  w-max h-max items-center">
                <div class="flex space-x-2 text-red-500">
                </div>
            </div>
            <div class="mt-4">
                <p class="text-green-400">$ npm install next</p>
                <p class="text-white">+ next@10.2.3</p>
                <p class="text-white">added 1 package, and audited 2 packages in 3s</p>
                <p class="text-green-400">$</p>
            </div>
            </aside>
        </>


    )
}