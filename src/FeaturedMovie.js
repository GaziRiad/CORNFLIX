import { useEffect, useState } from "react";
import { API_KEY, baseImageUrl } from "./App";

export function FeaturedMovie() {
  const [featuredMovie, setFeaturedMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
      );
      const data = await res.json();
      const featured = data.results[0];
      console.log(featured);
      setFeaturedMovie(featured);
    }
    fetchMovie();
  }, [setFeaturedMovie]);

  return (
    <div className="relative h-screen">
      <img
        src={`${baseImageUrl}w500${featuredMovie.backdrop_path}`}
        alt=""
        className="h-2/3 w-full filter brightness-50"
      />
      <p className="absolute top-80 left-24 font-bold text-white text-3xl uppercase">
        {featuredMovie.title}
      </p>
      <p className="absolute top-96 left-6 font-normal leading-7 text-white text-lg md:w-2/4 md:left-24 md:text-xl md:leading-8">
        {featuredMovie.overview}
      </p>
    </div>
  );
}
