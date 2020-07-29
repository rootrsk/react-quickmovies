import React from 'react';
import { Link, useLocation, Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';
import SearchedMovie from './cred/SearchedMovie';

const Header  = () =>{

    let history = useHistory()
    console.log(history)
    const searchMovie = async (e) =>{
        const query = e.target.value
        const response = await Axios({
            url:'https://quickmovies.herokuapp.com/search/?title='+query
            // url:'http://localhost:3001/search?title='+query
        })
        // if(!history.location.pathname==='/search')
        history.push({
            pathname:'/search',
            response : response.data
        })
        
    }
    return(
        <div className='header'>
            <h1><Link to='/'>QuickMovies</Link></h1>
            <input 
                type='search'
                className='search-box' 
                placeholder='Search' 
                onChange ={searchMovie}
            />
        </div>
    )
}

export default Header