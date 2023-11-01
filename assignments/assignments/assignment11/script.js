const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try {
        const reponse = await fetch(url);
        return await reponse.json();
    } catch (error) {
        console.log(error);
    }
};

const showMovies = async () => {
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies-section");

    movies.forEach((movie) => {
        moviesSection.append(getMovieItem(movie));
    });
};

const getMovieItem = (movie) => {
    let section = document.createElement("section");
    section.classList.add("movie");
    let h1 = document.createElement("img");
    let url = "https://portiaportia.github.io/json/";
    h1.src = url+movie.img;
    section.append(h1);
    h1.classList.add("zoom");

    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getTitle(movie.title));
    ul.append(getLi(`Director: `+movie.director));
    ul.append(getActors(movie.actors));
    ul.append(getLi(`Year: `+movie.year));
    ul.append(getGenres(movie.genres));
    ul.append(getLi(movie.description));


    return section;
};

const getTitle = title => {
    const h1 = document.createElement("h1");
    h1.textContent = title;
    return h1;
}

const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
};

const getActors = (movie) => {
    const section2 = document.createElement("section");
    section2.classList.add("section2");

    const p = document.createElement("p");
    p.innerHTML = "Actors: ";
    movie.forEach(actor => {
        
        p.textContent += (actor + `, `);
    })
    section2.append(p);
    return section2;
};

const getGenres = (genres) => {
    const section3 = document.createElement("section");
    section3.classList.add("section3");

    const p = document.createElement("p");
    p.innerHTML = "Genres: ";
    genres.forEach(genre => {
        p.textContent += (genre + `, `);
    })
    section3.append(p);
    return section3;
};



window.onload = () => showMovies();