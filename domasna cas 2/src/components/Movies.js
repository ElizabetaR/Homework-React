import React from "react";

export const Movies = ({ aListOfMovies }) => {

    return (
        <div id="movies">

            <h2>Movie List</h2>
            {aListOfMovies.map((movie, i) => {
                return (


                    <div key={i}>
                        <p><span>Movie Title: </span> {movie.name}</p>
                        <img width={"180"} height={"250"} src={movie.imgUrl} alt={movie.name} />
                        <a target="_blank" href={movie.imdbLink} >Go to IMDb </a>
                        <p><span>Release Date: </span> {movie.releaseDate}</p>
                        <p><span>Genre: </span> {movie.genre}</p>
                        <p><span>Plot: </span>{movie.plot}</p>

                        <br />

                    </div>
                )
            })}
        </div>
    )
}