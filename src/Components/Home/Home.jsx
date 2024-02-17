import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { DatePicker, Space } from 'antd';
import Modal from "../Modal/Modal";
import Loading from "../Loading/Loading";
import "antd/dist/antd.min.css";
import logo from "../../assets/filter.png"
import './home.css'
import { getMovieListActions, getSearchMovieActions } from "../../redux/Actions/movieActions";

function Home() {

    const [movieSearch, setMovieSearch] =useState('');
    const [filter, setFilter] = useState('');

    const [data, setData] = useState([]);

    const dispatch = useDispatch();

    const movieLists = useSelector((state) => state.movieList);

    const [modalOpen, setModalOpen] = useState(false);
    const [id, setId] = useState('');


    useEffect(() => {
        dispatch(getMovieListActions());
    }, []);

    const onChange = (date, dateString) => {
        setFilter(dateString);
    };

    useEffect(() => {
        if(filter!==""){
            let temp = movieLists?.movieList?.results.filter((data, index) => {
                return data.release_date.slice(0,4)===filter;
            });
            setData(temp);
        }else{
            setData(movieLists?.movieList?.results);
        }
    }, [filter, movieLists])

    const handleSearch = async () => {
        if(movieSearch===""){
            dispatch(getMovieListActions());
        }else{
            dispatch(getSearchMovieActions(movieSearch));
        }
    }

  const bg = 'https://image.tmdb.org/t/p/original/';

  return (
    <>
    {movieLists?.loading ?
    <div className="load">
        <Loading minHeight='90vh'/>
    </div> :
    <section className="movie-page">
      <div className="movie-background">
      <div className="container">
        <div className="section mb-3">
        <div className="content">
        <div className="movie-search">
            <input
                type="text"
                placeholder="Enter keyword"
                value={movieSearch}
                onChange={(e) => setMovieSearch(e.target.value)}
            />
            <button className="btn small" onClick={(e) => handleSearch()}>Search</button>
        </div>
        <div className="filter">
            <img src={logo} alt=""/>
            <Space direction="vertical">
                <DatePicker onChange={onChange} picker="year" style={{height: "3.5rem" ,marginTop: "0px", borderRadius: "15px"}}/>
            </Space>
      </div>
      </div>
      {movieLists?.loading ?
            <div className="load">
                <Loading minHeight='90vh'/>
            </div> :
        <div className="movie-grid">
            {data?.map((opt, index) => (
            <div className="main-card"   onClick={() => {
                setModalOpen(true);
                setId(opt.id);
            }}>
            <div className="card" style={{backgroundImage: `url(${bg}${opt.poster_path})`}}>
                <div className="hBackground"></div>
            </div>
                <h3 className="name">{opt.title}</h3>
            </div>
            ))}
            {modalOpen && 
            <Modal setOpenModal={setModalOpen} movieId={id} />
            }
        </div>
      }
        </div>
        {data?.length===0 && (
            <div className="result">
                <h3 style={{color: "white"}}>No Results</h3>
            </div>
        )}
        </div>
        </div>
      </section>
    }
    </>
  )
}

export default Home;
