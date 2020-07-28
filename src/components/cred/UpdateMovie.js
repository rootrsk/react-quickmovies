import React from 'react';
import MovieForm from './MovieForm';

const UpdateMovie = (props) => {

   
    return(
        <div> 
            <h1>Update Movie</h1>
            <MovieForm Operation={'update'} id={props.id}/>
        </div>
    )
    
}


export default UpdateMovie