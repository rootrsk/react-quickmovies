import React from 'react';

const Header  = () =>{
    return(
        <div className='header'>
            <h1>QuickMovies</h1>
            <input type='search' className='search-box' placeholder='Search' />
        </div>
    )
}

export default Header