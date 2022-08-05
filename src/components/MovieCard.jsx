import React, { useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext';

const MovieCard = ({movie}) => {
  const {id, title, vote_average, overview, poster_path} = movie;
  const navigate = useNavigate()
  const {currentUser} = useContext(AuthContext)

  const IMG_API = 'https://image.tmdb.org/t/p/w1280';

  const defaultImage =
  'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

  const setVoteClass = (vote) => {
    if(vote > 8){
      return "green"
    }
    else if(vote >= 6){
      return "orange"
    }else{
      return "red"}
  }

  return (
    <div className='col-lg-4 col-md-6'>
      <div className='card singleMovie my-1' onClick={()=>navigate("/details/" + id)}>
      <div className='movie-img'>
        <img src={poster_path ? IMG_API + poster_path : defaultImage} alt={title} />
      </div>
      <div className='d-flex justify-content-between px-2'>
        <h5 className='m-auto fs-2'>{title}</h5>
        <div className='rounded-5 my-auto'> 
        {currentUser && <h3 className={`rounded-5 p-3 m-auto tag ${setVoteClass(vote_average)}`}>{vote_average}</h3> }
        </div>
      </div>
      <div className='overview'>
        <p>{overview}</p>
      </div>
      
    </div>
    </div>
    
  )
}

export default MovieCard