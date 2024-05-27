import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import MovieNav from "./MovieNav";
import MovieCards from "./MovieCards";
import MovieCarousels from "./MovieCarousels";
import "./css/styles.css";
import Filter_movie from "./Filter_movie";

function Home() {
  let url =
    "https://api.themoviedb.org/3/trending/movie/day?l&api_key=74dd62c8165bc81c172b71761890044f&language=en-US";
  // let url =
  //   'https://api.themoviedb.org/3/trending/all/day?api_key=74dd62c8165bc81c172b71761890044f&language=en-US"'; 


  let [all_movies, setAllMovies] = useState([]);
  let [carousel, setCarousel] = useState([]);
  let [search, setSearch] = useState();
  let [indMovie, setIndMovie] = useState();

  // useEffect(() => {
  //   console.log('this is search',search)
  // },[search])

  useEffect(() => {
    axios.get(url).then(res => {
      setAllMovies(res.data.results);
    });
  }, []);

  useEffect(() => {
    setCarousel(all_movies.slice(0, 3));
  }, [all_movies]);
  console.log("this is carousel", carousel);

  return (
    <>
      <MovieNav
        setIndMovie={setIndMovie}
        search={search}
        setSearch={setSearch}
      />

      {indMovie ? (
        <div className="filter-movie cards d-flex flex-wrap justify-content-center container ">
          <Filter_movie indMovie={indMovie} />
        </div>
      ) : (
        <div className="movie-content  ">
          <div className="carousel container col-12 col-md-10 col-lg-9">
            <MovieCarousels carousel={carousel} />
          </div>

          <div className="cards d-flex flex-wrap justify-content-center p-2 p-md-0">
            <MovieCards all_movies={all_movies} />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
