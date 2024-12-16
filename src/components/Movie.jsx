import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="card h-100">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={movie.Title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
      </div>
    </div>
  );
};

export default Movie;
