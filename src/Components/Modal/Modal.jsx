import React from 'react'
import './modal.css';
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetailsActions } from '../../redux/Actions/movieActions';

function Modal({ setOpenModal, movieId }) {

    const dispatch = useDispatch();

    const movieDetails = useSelector((state) => state.movieDetails);

    useEffect(() => {
        dispatch(getMovieDetailsActions(movieId));
    }, []);

    const bg = 'https://image.tmdb.org/t/p/original/';

  return (
    <>
    {movieDetails?.loading ?
      <div className='load1'>
          <Loading minHeight='90vh'/>
      </div> :
    <div className="modalBackground" style={{backgroundImage: `url(${bg}${movieDetails?.movieDetails?.backdrop_path})`, backgroundSize:"cover"}}>
        <div className="modalBackground2">
         <div className='i1' style={{backgroundImage: `url(${bg}${movieDetails?.movieDetails?.poster_path})`}}></div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{movieDetails?.movieDetails?.title}</h1>
        </div>
        <div className='genre'>
          {movieDetails?.movieDetails?.genres?.map((opt, index) => (
            <span className='genre__item'>{opt?.name}</span>
          ))}
        </div>
        <div className="body">
          <p>{movieDetails?.movieDetails?.overview}</p>
        </div>
        <div className='status'>
          <p>Status : {movieDetails?.movieDetails?.status}</p>
        </div>
        <div className='rating'>
          <p>Rating : {Math.round(movieDetails?.movieDetails?.vote_average)}</p>
        </div>
      </div>
      </div>
    </div>
    }
    </>
  )
}

export default  Modal;