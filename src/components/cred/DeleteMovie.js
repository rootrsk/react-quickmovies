import React from 'react';
import MovieForm from './MovieForm';
import axios from 'axios'

const DeleteMovie = (props) => {
   
    return(
        <div>
            <h1>Delete Movie</h1>
            <MovieForm Operation={'delete'} id={props.id} />
        </div>
    )
    
}


export default DeleteMovie