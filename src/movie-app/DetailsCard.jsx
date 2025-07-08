export default function DetailsCard({detailFilm, handleClick, active}){
    return(
        <div className={`container-detail-video bg-white w-[90vw] min-h-[200px] max-h-[75vh] overflow-y-auto py-3 px-4 rounded-md shadow-md no-scrollbar lg:w-[75vw] transition-all duration-300 scale-0 opacity-0 ${active ? 'animation-active' : ''}`}>
                <div className="judul mb-3">
                    <h2 className="font-bold text-sky-600 lg:text-xl">Detail Film</h2>
                </div>
                <div className="konten flex flex-col mb-3 px-2 lg:flex-row lg:gap-6">
                    <div className="gambar mx-auto w-1/2 h-[35vh] md:h-[40vh] md:w-1/4 overflow-hidden lg:w-1/3">
                        <img src={detailFilm.Poster} alt="gambar film" className="w-full object-center"/>
                    </div>
                    <div className="keterangan-film my-3">
                        <h1 className="text-2xl font-bold text-sky-600 text-center lg:text-4xl">{detailFilm.Title}</h1>
                        <div className="director flex gap-4">
                            <p className="font-bold w-1/6  md:w-1/12 text-slate-900">Director </p>
                            <p className="w-5/6 text-justify md:w-11/12 text-slate-500">{detailFilm.Director}</p>
                        </div>
                        <div className="actors flex gap-4">
                            <p className="font-bold w-1/6  md:w-1/12 text-slate-900">Actors </p>
                            <p className="w-5/6 text-justify md:w-11/12 text-slate-500">{detailFilm.Actors}</p>
                        </div>
                        <div className="plot flex gap-4">
                            <p className="font-bold w-1/6 md:w-1/12 text-slate-900">Plot </p>
                            <p className="w-5/6 text-justify md:w-11/12 text-slate-500">{detailFilm.Plot}</p>
                        </div>
                    </div>
                </div> 
                <button className="close-btn px-7 py-2 bg-sky-600 rounded-md shadow-md text-white text-sm font-bold cursor-pointer float-right ring-1 ring-sky-200 hover:bg-sky-500 hover:ring-sky-800 active:bg-sky-800" onClick={handleClick}>Close</button>
        </div>
    )
}