import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [error, setError] = useState(null);

  const API_KEY = "bff96fb7"; 

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError(null);
      } else {
        setError(response.data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div className="container mt-4">
      <Header title="Kuflix" />
      <Search onSearch={handleSearch} />
      <div className="row mt-4">
        {error ? (
          <div className="col-12 text-center text-danger">{error}</div>
        ) : (
          movies.map((movie) => (
            <div key={movie.imdbID} className="col-md-4 col-sm-6 mb-4">
              <Movie movie={movie} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
