import { useState } from "react";
import Card from "./Card";
import SearchForm from "./SearchForm";
import { getDetailsMovie, getMovies } from "./FeatchAPI";
import DetailsCard from "./DetailsCard";

export default function SearchedFilm(){
    const [movies, setMovies] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [detailMovie, setDetailMovie] = useState({});


    async function handleSearch(inputValue){
        try {
            
            const response = await getMovies(inputValue);
            setMovies(response);
        } catch (error) {
            setMovies([]);
            alert(error);
        }
    }

    const handleDetail = async (imdbID) => {
        const detailMovie = await getDetailsMovie(imdbID);
        setIsOpen(!isOpen);
        setDetailMovie(detailMovie);
    }

    const handleClose = () =>{
        setIsOpen(!isOpen)
    }


    return (
        <>
            <SearchForm onSearch={handleSearch} placeholder="Cari Judul Film" buttonText="Search"/>
            <div className="pembungkus-card flex flex-wrap px-1 mx-2">
                {movies.map((film => (
                    <Card key={film.imdbID} film={film} onDetails={handleDetail}/>
                )))}
            </div>
            <div className={`pembungkus-detail-video fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-black/20 ${isOpen ? 'visible' : 'invisible'}`}>
                <DetailsCard active={isOpen} detailFilm={detailMovie} handleClick={handleClose}/>
            </div>
        </>
    );
}