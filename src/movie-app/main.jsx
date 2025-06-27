import { createRoot } from "react-dom/client";
import './css/style.css'
import Judul from "./Judul";
import SearchForm from "./SearchForm";
import SearchedFilm from "./SearchedFilm";

createRoot(document.getElementById('root'))
.render(
    <div className="container mx-auto">
        <Judul name="BangSya TV Movie"/>
        <SearchedFilm/>
    </div>
);