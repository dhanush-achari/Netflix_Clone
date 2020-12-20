import React, { useState, useEffect } from "react";
import axios from "./axios"; //when you have export default we can use any name while importing
import "./Row.css";
import Youtube from "react-youtube"

const base_url = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLarge }) {
  const [Movies, setMovies] = useState([]);

  // this snippet runs every time the row load or everytime something changes
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request); //Inspect the page and see hoe the object looks in console

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //if [] the snippet only runs once but if[fetchUrl] runs everytime the movies changes

  console.log(Movies);

  return (
    <div className="row">
      {/* title */}
      <h2 className="title">{title}</h2>

      <div className="row-posters">
        {/* several row posters */}
        {Movies.map((movie) => (
          <img
            key={movie.id} //when we are rendering huge amount of data providing a key which is unique to every element let react only render that element hence making it fast
            className={`row-poster ${isLarge && "row-posterLarge"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      <Youtube/>
    </div>
  );
}

export default Row;
