// import { useState } from "react";

export default function SearchForm({handleSearch, handleSearchChange, inputValue}){
    // const [search, setSearch] = useState("");
    // function handleChange(e){
    //     setSearch(e.target.value)
    // }
    
    // function handleSearch(e){
    //     e.preventDefault();
    //     console.log(`Yang anda cari adalah ${search}`);
    // }
    

    return (
        <form action="" className="mx-4 my-5 flex">
            <input type="input" id="text-search" placeholder="Cari Judul Film disini" className="text-search text-sky-800 w-full border-1 border-sky-600 rounded-md p-2  focus:ring-sky-500 focus:ring-1 focus:outline-none focus:shadow-lg" value={inputValue} onChange={handleSearchChange}/>
            <button className="btn-search ml-4 flex item-center justify-center px-7 bg-sky-600 py-2 text-white font-bold rounded-md cursor-pointer shadow-sm hover:bg-sky-400 active:bg-sky-700" onClick={handleSearch}>Search</button>
        </form>
    )
}