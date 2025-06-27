import { useState } from "react";
import Card from "./Card";
import SearchForm from "./SearchForm";

export default function SearchedFilm(){
    const [search, setSearch] = useState("");
    // const [load, setLoad] = useState(false);
    const [movies, setMovies] = useState([]);
    

    function handleSearchChange(e){
        setSearch(e.target.value);
    }

    async function handleSearch(e){
        e.preventDefault();
        try {
            console.log(`Yang anda cari adalah ${search}`);
            // setLoad(true)
            const response = await fetch('http://www.omdbapi.com/?apikey=236a868b&s='+ search).then(response => (response.json())).then(response => (response.Search));
            setMovies(response);
            console.log(movies);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <SearchForm handleSearchChange={handleSearchChange} handleSearch={handleSearch} inputValue={search}/>
            <div className="pembungkus-card flex flex-wrap px-1 mx-2">
                {movies.map((film => (
                    <Card key={film.imdbID} film={film}/>
                )))}
            </div>
        </>
    );
}