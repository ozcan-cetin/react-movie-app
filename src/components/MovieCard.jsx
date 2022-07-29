import React from 'react'

const MovieCard = ({movie}) => {
  const {title, vote_average, overview, poster_path} = movie;

  const IMG_API = 'https://image.tmdb.org/t/p/w1280';

  const defaultImage =
  'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

  return (
    <div className='singleMovie'>
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