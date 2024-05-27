import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MovieCards({ all_movies }) {
  //   console.log("from card", all_movies.all_movies);
  let navigate = useNavigate()
  console.log("this is all mobie", all_movies);
  return (
    <>
      {all_movies.map(a => {
        return (
          <Card
            className="m-4 movie-cards p-1 col-12 col-md-5 col-lg-3"
            key={a.id}
            style={{ width: "19rem" }}
            onClick={() => navigate(`/movie/${a.id}`, { state: { a } })}
          >
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/original/${a.backdrop_path}`}
            />
            <Card.Body>
              <Card.Title>
                {a.original_title.slice(0, 20)}{" "}
                {a.original_title.length > 20 && " ..."}
              </Card.Title>
              <Card.Text>
                {a.overview.slice(0, 50)}
                {/* <a style={{ cursor: "pointer" }} href="#"> */}
                <span className="text-muted"> ...read more</span>
                {/* </a> */}
              </Card.Text>
              <Button
                className="bg-dark text-white play-button btn-block"
                variant=""
              >
                <i class="fa fa-play" aria-hidden="true"></i>
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default MovieCards;
