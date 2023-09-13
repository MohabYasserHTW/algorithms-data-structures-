import List from "./List_implementation";

/* 
    Modify the video-rental kiosk program so that when a movie is checked out it is
    added to a list of rented movies. Display this list whenever a customer checks out
    a movie
*/

let moviesList = new List<string>()
let rentedMoviesList = new List<string>()

moviesList.append("1 man army")
moviesList.append("2 man army")
moviesList.append("13 man army")
moviesList.append("14 man army")
moviesList.append("15 man army")
moviesList.append("16 man army")
moviesList.append("17 man army")
moviesList.append("12 man army")

function checkOut(movie: string) {
    if(moviesList.contains(movie)){
        rentedMoviesList.append(movie)
        moviesList.remove(movie)

        console.log("________________________________________________________")
        console.log("Avlilable movies \n",moviesList.toString())
        console.log("Rented movies \n",rentedMoviesList.toString())
        console.log("________________________________________________________")
    }else{
        console.log("wrong movie name")
    }
}

//test
checkOut("16 man army")
checkOut("15 man army")

/* 
    Create a check-in function for the video-rental kiosk program so that a returned
    movies is deleted from the rented movies list and is added back to the available
    movies list
*/

function checkIn(movie: string) {
    if(rentedMoviesList.contains(movie)){
        moviesList.append(movie)
        rentedMoviesList.remove(movie)

        console.log("________________________________________________________")
        console.log("Avlilable movies \n",moviesList.toString())
        console.log("Rented movies \n",rentedMoviesList.toString())
        console.log("________________________________________________________")
    }else{
        console.log("wrong movie name")
    }
}

//test
checkIn("16 man army")

