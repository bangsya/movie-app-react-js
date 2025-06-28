import { useState } from "react";
import Card from "./Card";
import SearchForm from "./SearchForm";
import { getMovies } from "./FeatchAPI";

export default function SearchedFilm(){
    const [movies, setMovies] = useState([]);

    async function handleSearch(inputValue){
        try {
            
            const response = await getMovies(inputValue);
            setMovies(response);
        } catch (error) {
            setMovies([]);
            alert(error);
        }
    }


    return (
        <>
            <SearchForm onSearch={handleSearch} placeholder="Cari Judul Film" buttonText="Search"/>
            <div className="pembungkus-card flex flex-wrap px-1 mx-2">
                {movies.map((film => (
                    <Card key={film.imdbID} film={film}/>
                )))}
            </div>
        </>
    );
}