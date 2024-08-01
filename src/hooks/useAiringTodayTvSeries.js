import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addAiringToday } from "../utils/tvSeriesSlice";

const useAiringTodayTvSeries = () => {
  const dispatch = useDispatch();

  const getAiringTodayTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAiringToday(json.results));
  };

  useEffect(() => {
    getAiringTodayTvSeries();
  }, []);
};

export default useAiringTodayTvSeries;
