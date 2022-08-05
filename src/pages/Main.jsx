import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';
// import { toastWarnNotify } from '../helpers/Toastify';


const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const {currentUser} = useContext(AuthContext)
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()
  

  const getMovies = async(API) => {
    setIsLoading(true)
    try {
      const {data} = await axios.get(API)
      // console.log(data);
      setMovies(data.results)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(currentUser && searchTerm){
      getMovies(SEARCH_API + searchTerm) 
    }
    else if(!currentUser){
      // toastWarnNotify('Please log in to search a movie');
      navigate("/login")
    }
    else{
      // toastWarnNotify('Please enter a text');
    }
    
  }
  
  if (isLoading){
    <h1>Loading...</h1>
  }
  return (
    <div>
      <form className="search d-flex justify-content-center" onSubmit={handleSubmit}>
        <input
          type="search"
          className="bg-warning text-danger fs-4 px-2 rounded-2"
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className='btn btn-dark'>Search</button>
      </form>
      <div className='movieContainer row m-auto'>
        {movies?.map((movie)=><MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Main