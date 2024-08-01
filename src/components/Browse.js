import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useAiringTodayTvSeries from "../hooks/useAiringTodayTvSeries";
import useOnTheAirTvSeries from "../hooks/useOnTheAirTvSeries";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useTopRatedTvSeries from "../hooks/useTopRatedTvSeries";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodayTvSeries();
  useOnTheAirTvSeries();
  usePopularTvSeries();
  useTopRatedTvSeries();

  return (
    <div className="w-screen h-screen object-cover">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
