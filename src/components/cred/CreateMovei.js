import React from 'react';
import MovieForm from './MovieForm';
import axios from 'axios'

const CreateMovie = (props) => {
    return(
        <div> 
            <h1>Create Movie</h1>
            <MovieForm Operation={'create'}  />
        </div>
    )
    
}


export default CreateMovie