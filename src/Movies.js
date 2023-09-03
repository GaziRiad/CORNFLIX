import { baseImageUrl } from "./App";

export function Movies({ movies, onClick }) {
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
                className=" w-[100%] h-96 rounded-md overflow-hidden  text-white hover:brightness-75  duration-500 cursor-pointer"
                onClick={() => onClick(movie.id)}
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
