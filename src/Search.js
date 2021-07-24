import React from "react";
import { useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./Search.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_ulr = "https://image.tmdb.org/t/p/original/";

function Search() {
  const [getInput, setInput] = useState("");
  const [GetMovie, setMovie] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  function onChangeInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit() {
    getData();
    setInput("");
  }

  const getData = async () => {
    const request = await axios.get(`${requests.fetchSearch}${getInput}`);
    setMovie(request.data.results);
    return request;
  };

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie.title ?? movie.original_title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  const vid = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search your favorite film"
          onChange={onChangeInput}
          value={getInput}
        />
        <button className="btn__search" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div className="result">
        {GetMovie.map((movie) => (
          <img
            src={`${base_ulr}${movie.poster_path}`}
            // onClick={handleClick(movie)}
            key={movie.id}
            alt={movie.original_title}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={vid} />}
    </>
  );
}

export default Search;
