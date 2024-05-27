import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Filter_movie({ indMovie }) {
  let navigate = useNavigate()
    let { id } = useParams();
  let [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${indMovie}&api_key=74dd62c8165bc81c172b71761890044f
`
    )
      .then(res => res.json())
      .then(data => setMovie(data.results));
  }, [indMovie]);
  console.log("ind movie", movie);

  return (
    <>
      {movie.map(a => {
        return (
          <>
              <Card
                className="m-4 movie-cards p-1 col-12 col-md-5 col-lg-3"
                key={a.id}
                onClick={() => navigate(`/movie/${a.id}`, { state: { a } })}
                style={{ width: "19rem" }}
              >
                <Card.Img
                  className="rounded-5"
                  variant="top"
                  src={`https://image.tmdb.org/t/p/original/${a.backdrop_path}`}
                  width={"100%"}
                  height={"200px"}
                />
                <Card.Body>
                  <Card.Title>
                    {a.original_title.slice(0, 20)}{" "}
                    {a.original_title.length > 20 && " ..."}
                  </Card.Title>
                  <Card.Text>
                    {a.overview.slice(0, 50)}
                    <a style={{ cursor: "pointer" }}>
                      <span className="text-muted"> ...read more</span>
                    </a>
                  </Card.Text>
                  <Button
                    className="bg-dark text-white play-button btn-block"
                    variant=""
                  >
                    <i class="fa fa-play" aria-hidden="true"></i>
                  </Button>
                </Card.Body>
              </Card>
          </>
        );
      })}
    </>
  );
}

export default Filter_movie;
