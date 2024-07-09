export default function FiedlFind(){
    return(
        <div className="w-8/12 flex items-center bg-white px-2 rounded-full overflow-hidden">
            <span className="material-symbols-outlined text-orange-500">search</span>
            <input type="text" className="border-none w-full p-2 focus:outline-none text-slate-700" placeholder="Search for anything"/>
        </div>
    )
}