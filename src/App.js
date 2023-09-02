import { useEffect } from "react";
import Header from "./Header";

const API_KEY = "db3cf4891cc843bd89f697bffe4118cc";

// fetch POPULAR
// const res = await fetch(
//   `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
// );

// fetch MOVIE
// const res = await fetch(
//   `https://api.themoviedb.org/3/movie/654865?api_key=${API_KEY}&language=en-US`
// );

export default function App() {
  useEffect(() => {
    async function fetchPopularMovies() {
      // 654865
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/654865?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      console.log(data);
    }
    fetchPopularMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}
