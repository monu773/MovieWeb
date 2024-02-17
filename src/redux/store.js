import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getMovieList, getMovieDetails } from "./reducer/movieReducer";

const reducer = combineReducers({
  movieList: getMovieList,
  movieDetails: getMovieDetails,
  // searchMovie: getSearchMovie
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
