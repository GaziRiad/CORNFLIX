import { useEffect, useState } from "react";
import Header from "./Header";
import FeaturedMovie from "./FeaturedMovie";

export const API_KEY = "db3cf4891cc843bd89f697bffe4118cc";

// fetch POPULAR
// const res = await fetch(
//   `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
// );

// fetch MOVIE
// const res = await fetch(
//   `https://api.themoviedb.org/3/movie/654865?api_key=${API_KEY}&language=en-US`
// );

export const baseImageUrl = "https://image.tmdb.org/t/p/";

export default function App() {
  const [featuredMovie, setFeaturedMovie] = useState({});
  const [Movies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
        );
        const data = await res.json();
        const featured = data.results[0];
        setFeaturedMovie(featured);
        setPopularMovies(data.results);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovie();
  }, [setFeaturedMovie, setPopularMovies]);
  return (
    <div>
      <Header />
      <FeaturedMovie movie={featuredMovie} />
      <PopularMovies movies={Movies} />
    </div>
  );
}

function PopularMovies({ movies }) {
  return (
    <div className=" w-[70%] mx-auto py-12">
      <h2 className=" font-bold text-[#000411] uppercase text-xl mb-6">
        Popular movies
      </h2>
      <div className=" grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-5">
        {movies &&
          movies.map((movie) => {
            return (
              <div
                key={movie.id}
                className=" w-[100%] h-96 rounded-md overflow-hidden  text-white hover:brightness-75 duration-500 cursor-pointer"
              >
                <img
                  src={`${baseImageUrl}w400${movie.poster_path}`}
                  alt=""
                  className="h-[80%] w-[100%]"
                />
                <p className="h-[20%] text-center bg-slate-900 p-4">
                  {movie.title.split(" ").length > 6
                    ? movie.title.split(" ").slice(0, 4).join(" ") + " ..."
                    : movie.title}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
