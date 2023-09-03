import { useEffect, useState } from "react";
import Header from "./Header";
import FeaturedMovie from "./FeaturedMovie";

import { LoadingSpinner } from "./LoadingSpinner";
import { Movies } from "./Movies";
import { Search } from "./Search";

export const API_KEY = "db3cf4891cc843bd89f697bffe4118cc";

// fetch POPULAR
// const res = await fetch(
//   `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
// );

// fetch MOVIE by ID
// const res = await fetch(
//   `https://api.themoviedb.org/3/movie/654865?api_key=${API_KEY}&language=en-US`
// );

// fetch per QUERY
// https://api.themoviedb.org/3/search/keyword?page=1

export const baseImageUrl = "https://image.tmdb.org/t/p/";

export default function App() {
  const [featuredMovie, setFeaturedMovie] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  function handleSelectedMovie(id) {
    async function fetchMovie() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );

        const data = await res.json();
        console.log(data);
        setSelectedMovie(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovie();
  }

  useEffect(() => {
    setSearchedMovies([]);
    if (query.length !== 0) return;
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc`
        );
        const data = await res.json();
        const featured = data.results[0];
        setFeaturedMovie(featured);
        setPopularMovies(data.results);
        setIsLoading(false);
        console.log(data.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovie();
  }, [query]);

  useEffect(() => {
    async function fetchSearchedMovie() {
      try {
        if (query.length < 3) return;
        setIsLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjNjZjQ4OTFjYzg0M2JkODlmNjk3YmZmZTQxMThjYyIsInN1YiI6IjY0ZjMyMGNhMWYzMzE5MDBjNmY1YWMxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FCXyUBhAiYprwNE9P7i49SRp-O3qzOLit5IzwzPyWE4",
            },
          }
        );

        const data = await res.json();
        setSearchedMovies(data.results);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    fetchSearchedMovie();
  }, [query]);

  return (
    <div>
      <Header>
        <Search query={query} setQuery={setQuery} />
      </Header>

      {searchedMovies.length > 0 && (
        <Movies movies={searchedMovies} onClick={handleSelectedMovie} />
      )}
      {isLoading && searchedMovies.length === 0 ? (
        <LoadingSpinner />
      ) : !isLoading && searchedMovies.length === 0 ? (
        <>
          <FeaturedMovie movie={featuredMovie} />
          <Movies movies={popularMovies} onClick={handleSelectedMovie} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

function SelectedMovie() {
  return <div></div>;
}
