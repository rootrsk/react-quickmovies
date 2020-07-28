import React from 'react';
import { Link } from 'react-router-dom';

const Header  = () =>{
    return(
        <div className='header'>
            <h1><Link to='/'>QuickMovies</Link></h1>
            <input type='search' className='search-box' placeholder='Search' />
        </div>
    )
}

export default Header