import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";

const base_ulr = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${base_ulr}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <div className="banner__title">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__desription">
          {truncate(movie?.overview, 150)}
        </div>
      </div>

      <div className="banner--fadebottom" />
    </header>
  );
}

export default Banner;
