import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {axios} from "axios"

const MovieDetail = () => {
  const {id} =useParams()
  const [movieDetails, setMovieDetails] = useState("")
  const [video, setVideo] = useState(false)

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = 'https://image.tmdb.org/t/p/w1280';
  const defaultImage =
    'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';


  
  useEffect(() => {
      axios.get(movieDetailBaseUrl).then((res)=>console.log(res.data))
    
  }, [movieDetailBaseUrl])
  
  return (
    <div>
      <div className='card mb-3" style="max-width: 540px;'>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="" className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
