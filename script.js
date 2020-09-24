


window.onload = () =>  {
    fetchMovies();
}

function fetchMovies(){
    fetch("https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213")
    .then((response)=>{
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("something went wrong");
        }
    })
    .then((data)=>{
        addMovies(data);
    })
    .catch((error_data)=>{
        console.log(error_data);
    })
}

// Add movies to the front end
function addMovies(movies){
    // Add img element to original__movies element
    var moviesEl = document.querySelector('.original__movies');
    for(var movie of movies.results){
        var image = `
            <img src="https://image.tmdb.org/t/p/original${movie.poster_path}"></img>
        `
        moviesEl.innerHTML += image;
    }
}
