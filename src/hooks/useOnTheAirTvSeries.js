import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addOnTheAir } from "../utils/tvSeriesSlice";

const useOnTheAirTvSeries = () => {
  const dispatch = useDispatch();

  const getOnTheAirTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addOnTheAir(json.results));
  };

  useEffect(() => {
    getOnTheAirTvSeries();
  }, []);
};

export default useOnTheAirTvSeries;
