var favoritemovies = [];

function addfavoritemovie(moviename) {
    if (moviename.includes("The") == false) {
        favoritemovies.push(moviename);
    }
}

function printfavoritemovies() {
    console.log("Favorite Movies: " + favoritemovies);
}

addfavoritemovie("The Lion King");
addfavoritemovie("Interstellar");
addfavoritemovie(" John Wick");

printfavoritemovies()