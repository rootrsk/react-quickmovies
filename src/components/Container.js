import React from 'react';
import { Link } from 'react-router-dom';


const Container = (props)=>{
    return(
        <div className='slides'>
            <div className='slides_inner-div'>
                <div className='title'>{props.movie.title} </div>
                {console.log(props.movie)}
                <Link 
                    
                    to={{
                        pathname: '/movie/'+props.movie.title,
                        state:props.movie
                    }}
                    movie={props.movie}  
                >   <img className='movie-poster' src={props.movie.Poster}alt='img' /></Link>
            </div>
        </div>
    )
}

export default Container
