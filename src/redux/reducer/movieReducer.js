import {
    GET_MOVIELIST_FAIL,
    GET_MOVIELIST_REQUEST,
    GET_MOVIELIST_SUCCESS,
    GET_MOVIEDETAILS_FAIL,
    GET_MOVIEDETAILS_REQUEST,
    GET_MOVIEDETAILS_SUCCESS,
  } from "../types/movieConstant";
  
  export const getMovieList = (state = {}, action) => {
    switch (action.type) {
      case GET_MOVIELIST_REQUEST:
        return { loading: true };
      case GET_MOVIELIST_SUCCESS:
        return { loading: false, movieList: action.payload };
      case GET_MOVIELIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const getMovieDetails = (state = {}, action) => {
    switch (action.type) {
      case GET_MOVIEDETAILS_REQUEST:
        return { loading: true };
      case GET_MOVIEDETAILS_SUCCESS:
        return { loading: false, movieDetails: action.payload };
      case GET_MOVIEDETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };