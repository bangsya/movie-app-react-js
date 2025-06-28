import { useState } from "react";

export default function SearchForm({onSearch, placeholder = "Search", buttonText = "Search"}){
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(inputValue);
    };

    return (
        <form action="" onSubmit={handleSubmit} className="mx-4 my-5 flex">
            <input type="search" 
                id="text-search" 
                placeholder={placeholder} 
                className="text-search text-sky-800 w-full border-1 border-sky-600 rounded-md p-2  focus:ring-sky-500 focus:ring-1 focus:outline-none focus:shadow-lg" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}/>
            <button className="btn-search ml-4 flex item-center justify-center px-7 bg-sky-600 py-2 text-white font-bold rounded-md cursor-pointer shadow-sm hover:bg-sky-400 active:bg-sky-700" type="submit">{buttonText}</button>
        </form>
    )
}