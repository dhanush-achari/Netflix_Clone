import Axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./request";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/w500";

function Banner() {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(requests.fetchTopRated);
      console.log(request.data.results);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request.data.results;
    }
    fetchData();
  }, []);

  console.log(Movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${base_url}${Movie?.backdrop_path}")`,
        // objectFit:"contain",
        backgroundPosition: "center center",
      }}
    >
      {/* <<< BAckgorund Image*/}

      <div className="banner__content">
        {/* title */}
        <h2 className="banner__title">{Movie?.title || Movie?.original_title}</h2>

        {/* div > 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* Description */}
        <h1 className="banner_despriction">{Movie?.overview}</h1>
      
        <div className="banner__bottomfade"></div>
      </div>
      
    </header>
  );
}

export default Banner;
