import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function MovieCarousels({ carousel }) {
  return (
    <>
      <Carousel
        className="rounded-5"
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        {carousel.map(a => {
          console.log(a);
          return (
            <>
              <div className="rounded rounded-5" key={a.id}>
                <img
                  className="carousel-img"
                  src={`https://image.tmdb.org/t/p/original/${a.backdrop_path}`}
                  key={a.id}
                />
                <p className="legend">
                  {a.title} ({a.vote_average.toFixed(1)} / 10)
                </p>
                <br />
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
}

export default MovieCarousels;
