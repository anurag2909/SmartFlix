import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black w-screen px-5">
      <div className="-mt-52 relative z-10">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        <MovieList
          title={"Today's Top Pick For You"}
          movies={movies?.nowPlayingMovies}
        />

        <MovieList
          title={"Romantic TV Dramas"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
