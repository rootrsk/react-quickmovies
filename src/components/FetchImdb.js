import React from 'react';
import Axios from 'axios';

const FetchApi = () =>{
    const fet = async (i)=>{
        const response = await Axios({
            url:`http://www.omdbapi.com/?i=${i}&apikey=ce5aafa9`
        })
    }
   


    return(
        <div>
            <p>Rest api</p>
        </div>
    )
}

export default FetchApi