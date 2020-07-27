import React from 'react';
import { Link, Route } from 'react-router-dom';


const Container = (props)=>{
    return(
        <div className='slides'>
            <div className='slides_inner-div'>
                <div className='title'>{props.movie.title} </div>
                <Link 
                    
                    to={{
                        pathname: '/movie/'+props.movie.title,
                        state:props.movie
                    }}
                    movie={props.movie}  
                >   <img className='movie-poster' src={props.movie.poster}alt='img' /></Link>
            </div>
        </div>
    )
}

export default Container
