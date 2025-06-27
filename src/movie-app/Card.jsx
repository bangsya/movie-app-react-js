export default function Card({film}){
    return (
        <div className="w-1/2 px-2 mb-5 md:w-1/3 xl:w-1/4">
            <div className="rounded-xl shadow-lg overflow-hidden bg-sky-50 box-border">
                <div className="foto overflow-hidden h-[250px] bg-white">
                    <img src={film.Poster} alt="Gambar Film" className="w-full"/>
                </div>
                <div className="div m-2">
                    <h3 className="text-xl font-bold text-slate-900">{film.Title}</h3>
                    <p className="text-slate-700">{film.Year}</p>
                    <button className="bg-sky-600 px-5 py-2 rounded-lg shadow-md my-2 ring-1 ring-sky-200 text-white cursor-pointer hover:bg-sky-500 hover:ring-sky-800 active:bg-sky-800 btn-show-details" data-imdbid={film.imdbID}>Show Details</button>
                </div>
            </div>
        </div>
    )
}