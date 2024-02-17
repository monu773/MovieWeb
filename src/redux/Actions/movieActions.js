import { axiosGet } from "../axios";
import {
  GET_MOVIELIST_FAIL,
  GET_MOVIELIST_REQUEST,
  GET_MOVIELIST_SUCCESS,
  GET_MOVIEDETAILS_FAIL,
  GET_MOVIEDETAILS_REQUEST,
  GET_MOVIEDETAILS_SUCCESS,
  GET_SEARCHMOVIE_FAIL,
  GET_SEARCHMOVIE_REQUEST,
  GET_SEARCHMOVIE_SUCCESS,

} from "../types/movieConstant";

export const getMovieListActions = () => async (dispatch) => {
  try {
    console.log("Data")
    dispatch({ type: GET_MOVIELIST_REQUEST });
    console.log("Data2")

    const { data } = await axiosGet(`https://movie-task.vercel.app/api/popular?page=1`);

    dispatch({
      type: GET_MOVIELIST_SUCCESS,
      payload: data.data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: GET_MOVIELIST_FAIL,
      payload: error.response && error?.response?.data?.detail,
    });
  }
};

export const getMovieDetailsActions = (movieId) => async (dispatch) => {
  try {

    dispatch({ type: GET_MOVIEDETAILS_REQUEST });

    const { data } = await axiosGet(`https://movie-task.vercel.app/api/movie?movieId=${movieId}`);

    dispatch({
      type: GET_MOVIEDETAILS_SUCCESS,
      payload: data.data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: GET_MOVIEDETAILS_FAIL,
      payload: error.response && error?.response?.data?.detail,
    });
  }
};

export const getSearchMovieActions = (movieName) => async (dispatch) => {
  try {

    dispatch({ type: GET_MOVIELIST_REQUEST });

    const { data } = await axiosGet(`https://movie-task.vercel.app/api/search?page=1&query=${movieName}`);

    dispatch({
      type: GET_MOVIELIST_SUCCESS,
      payload: data.data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: GET_MOVIELIST_FAIL,
      payload: error.response && error?.response?.data?.detail,
    });
  }
};