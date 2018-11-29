var movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true 
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
]

// Moj nacin
function movie(movies) {
    movies.forEach(function (film) {
        if(film.hasWatched == true) {
                console.log("You have watched " + "\"" + film.title + "\"" + " - " + film.rating)
        } else {
            (film.hasWatched == false) 
                console.log("You have not seen " + "\"" + film.title + "\"" + " - " + film.rating)
            }
    }
 )};

// Ovo je nacin koji je on koristio
function buildString(movie) {
    var result = "You have ";
    if(movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
};

movies.forEach(function(movie) {
    console.log(buildString(movie));
});
