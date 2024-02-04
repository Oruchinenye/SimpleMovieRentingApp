// Define Movie class
class Movie {
    constructor(title, genre, available) {
        this.title = title
        this.genre = genre
        this.available = available
    }
}

// Define Movie Rent class
class MovieRental {
    constructor(movie, user, dateAvailable) {
        this.movie = movie;
        this.user = user;
        this.dateAvailable = dateAvailable;
    }

    rentMovie(movie) {
        if (movie.available) {
            movie.available = false;
            this.user.rentedMovies.push(this.movie);
            return { isMovieReturned: movie.available, summary: this.user.rentedMovies }
        } else {
            return { msg: `sorry, "${this.movie.title}" is not available for rent` };
        }
    }

    returnMovie(movie) {
        if (!movie.available) {
            movie.available = true;
            this.user.rentedMovies.pop();
            return { isMovieReturned: movie.available, movieName: this.movie.title, dateReturned: new Date().toDateString() }
        } else {
            return { msg: `sorry, "${this.movie.title}" is not available for rent` };
        }
    }

}

// Define the users class
class User {
    constructor(name) {
        this.name = name;
        this.rentedMovies = [];
    }
}


// Create user object
const nenye = new User('Chinny');

// Create movie objects
const firstMovie = new Movie("Anaconda", "Trailer", true);
const secondMovie = new Movie("Drama", "A man named God", false)

const rental = new MovieRental(firstMovie, nenye, new Date().toDateString())

console.clear()
// Rent a movie
console.log(`rent a movie: `, rental.rentMovie(firstMovie));

console.log()

// Return a movie
console.log(`return a movie: `, rental.returnMovie(firstMovie));

console.log()
// Rent a movie that isn't available
console.log(`rent a movie: `, rental.rentMovie(secondMovie));

console.log()

// Return a movie
console.log(`return a movie: `, rental.returnMovie(secondMovie));