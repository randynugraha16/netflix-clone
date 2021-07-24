import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_ulr = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title ?? "iron man 3")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__posters ${isLarge && "row__posterLarge"} `}>
        {movies.map((movie) => (
          <img
            src={`${base_ulr}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            key={movie.id}
            alt={movie.original_title}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
