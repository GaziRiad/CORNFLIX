import { baseImageUrl } from "./App";

export default function FeaturedMovie({ movie }) {
  return (
    <div className="relative h-[60vh]">
      <img
        src={`${baseImageUrl}w500${movie.backdrop_path}`}
        alt=""
        className="h-full w-full filter brightness-50"
      />
      <p className="absolute top-80 left-24 font-bold text-white text-3xl uppercase">
        {movie.title}
      </p>
      <p className="absolute top-96 left-6 font-normal leading-7 text-white text-lg md:w-2/4 md:left-24 md:text-xl md:leading-8">
        {movie.overview}
      </p>
    </div>
  );
}
