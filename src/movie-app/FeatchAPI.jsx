export function getMovies(keyword){
    return fetch(`http://www.omdbapi.com/?apikey=236a868b&s=${keyword}`)
        .then((response) => {
            if (!response.ok){
                throw new Error(response.statusText);
            }else {
                return response.json();
            }
        })
        .then((response) => {
            if (response.Response === 'False'){
                throw new Error(response.Error);
            }else{
                return response.Search;
            }
        })
}