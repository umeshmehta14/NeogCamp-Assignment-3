// Given a list of movies as an array of objects with properties id, title, rating, year and category. Create a React component to list down all movies with rating and year. Create radio buttons to filter by category. Create a dropdown to filter by rating. Fake fetch has been provided.

import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
import Filters from "./Filters";
import ShowMovies from "./ShowMovies";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [selectedRating, setSelectedRating] = useState();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const Ratings = ["All", "8.0", "8.5", "9.0", "9.5"];

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/movies");
      if (response.status === 200) {
        setMovies(response.data);
        setMoviesList(response.data);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const Categories = [
    "All",
    ...new Set(moviesList.map(({ category }) => category))
  ];

  const HandleCategory = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "All") {
      setMovies(moviesList);
    } else {
      setMovies(() =>
        moviesList.filter(({ category }) => category === selectedCategory)
      );
    }
  };

  const HandleRatings = (event) => {
    setSelectedRating(event.target.value);
  };

  const filteredMovies = selectedRating
    ? selectedRating === "All"
      ? movies
      : movies.filter(({ rating }) => rating > +selectedRating)
    : movies;
  return (
    <>
      <h1>{loading && "Loading..."}</h1>
      <h1>{error && "Something Went Wrong Try Again Later"}</h1>

      {!loading && !error && (
        <>
          <Filters
            HandleCategory={HandleCategory}
            Categories={Categories}
            Ratings={Ratings}
            HandleRatings={HandleRatings}
          />
          <div>
            {filteredMovies.map((movie) => {
              return <ShowMovies key={movie.id} movie={movie} />;
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Movies;
