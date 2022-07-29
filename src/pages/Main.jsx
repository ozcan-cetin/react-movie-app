import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';
import { AuthContext } from '../context/AuthContext';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const {currentUser} = useContext(AuthContext)
  

  const getMovies = async(API) => {
    setIsLoading(true)
    try {
      const {data} = await axios.get(API)
      console.log(data);
      setMovies(data.results)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])
  
  if (isLoading){
    <h1>Loading...</h1>
  }
  return (
    <div>
      <div>
        {movies?.map((movie)=><MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Main