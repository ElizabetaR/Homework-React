import React from "react";
import { Movies } from './Movies';


export function App() {


  const movies = [
    { name: <b>Arcane</b>, releaseDate: 2021, genre: "Animation, Action, Adventure", plot: "Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.", imdbLink: "https://www.imdb.com/title/tt11126994/?ref_=hm_fanfav_tt_t_6_pd_fp1", imgUrl: "https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" },
    { name: <b>The Grand Budapest Hotel</b>, releaseDate: 2014, genre: "Adventure, Comedy, Crime", plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.", imdbLink: "https://www.imdb.com/title/tt2278388/", imgUrl: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg" },
    { name: <b>Frankenweenie</b>, releaseDate: 2012, genre: "Animation, Comedy, Drama", plot: "When a boy's beloved dog passes away suddenly, he attempts to bring the animal back to life through a powerful science experiment.", imdbLink: "https://www.imdb.com/title/tt1142977/?ref_=nv_sr_srsg_0", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a9/Frankenweenie_%282012_film%29_poster.jpg" },
    { name: <b>Dune</b>, releaseDate: 2021, genre: "Action, Adventure, Drama", plot: "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.", imdbLink: "https://www.imdb.com/title/tt1160419/?ref_=hm_tpks_tt_i_10_pd_tp1_cp", imgUrl: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" },
    { name: <b>Blade Runner 2049</b>, releaseDate: "2017", genre: "Action, Drama, Sci-Fi", plot: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.", imdbLink: "https://www.imdb.com/title/tt1856101/?ref_=vp_back", imgUrl: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg" },

  ]




  return (
    <div id="app">

      <Movies aListOfMovies={movies} />

    </div>
  )
}