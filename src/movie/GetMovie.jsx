import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import MovieNav from "./MovieNav";
import YouTube from "react-youtube";
import Filter_movie from "./Filter_movie";
function GetMovie() {
  let [search, setSearch] = useState();
  let [indMovie, setIndMovie] = useState();
  let [trailer, setTrailer] = useState();
  let [dummy, setDummy] = useState();

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  let heightRef = useRef();

  let opts = {
    ...windowDimensions,
    playerVars: {
      autoplay: 1,
    },
  };

  async function gettrailer(id) {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?&api_key=74dd62c8165bc81c172b71761890044f&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setTrailer(data.results[0].key);
      });
  }

  let location = useLocation();
  let spe = location.state.a;

  // RESPONSIVE

  const updateWindowDimensions = () => {
    setWindowDimensions({
      width: heightRef.current.offsetWidth,
      height: heightRef.current.offsetHeight,
    });
    console.log("this is window dimensions", windowDimensions);
  };

  useLayoutEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);


  return (
    <div className="get-movie">
      {/* <div className="nav"> */}
      <MovieNav
        setIndMovie={setIndMovie}
        search={search}
        setSearch={setSearch}
      />
      {/* </div> */}

      {indMovie ? (
        <div className="cards d-flex flex-wrap justify-content-center container ">
          <Filter_movie indMovie={indMovie} />
        </div>
      ) : (
        <div className="movie-content">
          <div className="details container">
            {trailer ? (
              trailer && (
                <>
                  <YouTube
                    className="youtube"
                    style={{ width: "100%" }}
                    videoId={trailer}
                    // opts={{width: heightRef.current.offsetWidth, height: heightRef.current.offsetHeight}}
                    opts={opts}
                  />
                  <img
                    className="img-fluid"
                    src={`https://image.tmdb.org/t/p/original/${spe.backdrop_path}`}
                    alt=""
                    ref={heightRef}
                  />
                </>
              )
            ) : (
              <img
                className="img-fluid"
                src={`https://image.tmdb.org/t/p/original/${spe.backdrop_path}`}
                alt=""
                ref={heightRef}
              />
            )}
            <div className="info">
              {trailer ? (
                <button
                  className="btn btn-light mb-2"
                  onClick={() => setTrailer(null)}
                >
                  Exit Trailer{" "}
                  <i className="fa fa-play-circle" aria-hidden="true"></i>
                </button>
              ) : (
                <button
                  className="btn btn-light mb-2"
                  onClick={() => gettrailer(spe.id)}
                >
                  Watch Trailer{" "}
                  <i className="fa fa-play-circle" aria-hidden="true"></i>
                </button>
              )}
              <h1>{spe.original_title}</h1>
              <p>{spe.overview}</p>
            </div>
          </div>
        </div>
      )}

      {/* {trailer && <YouTube videoId={trailer} opts={opts} />} */}
    </div>
  );
}
export default GetMovie;
