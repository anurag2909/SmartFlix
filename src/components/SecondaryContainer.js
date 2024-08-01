import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tvSeries = useSelector((store) => store.tvSeries);
  return (
    <div className=" bg-black w-screen px-5">
      <div className="-mt-52 relative z-10">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        <MovieList
          title={"Airing Today Tv Series"}
          movies={tvSeries?.airingToday}
        />
        <MovieList title={"On The Air Tv Series"} movies={tvSeries?.onTheAir} />
        <MovieList
          title={"Popular Tv Series"}
          movies={tvSeries?.popularTvSeries}
        />
        <MovieList
          title={"Top Rated Tv Series"}
          movies={tvSeries?.topRatedTvSeries}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
