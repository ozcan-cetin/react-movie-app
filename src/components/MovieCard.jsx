import React from 'react'
import {useNavigate} from "react-router-dom"

const MovieCard = ({movie}) => {
  const {id, title, vote_average, overview, poster_path} = movie;
  const navigate = useNavigate()

  const IMG_API = 'https://image.tmdb.org/t/p/w1280';

  const defaultImage =
  'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

  return (
    <div className='singleMovie' onClick={()=>navigate("/details/" + id)}>
      <div className='movie-img'>
        <img src={poster_path ? IMG_API + poster_path : defaultImage} alt={title} />
      </div>
      <div className='movieTitle'>
        <h3>{title}</h3>
      </div>
      <div className='overview'>
        <p>{overview}</p>
      </div>
      
    </div>
  )
}

export default MovieCard