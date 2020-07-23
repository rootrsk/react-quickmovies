import React from 'react';

const Photo = () =>{
    return(
        <div>
            <form method='post' action='http://localhost:3001/movie' encType='multipart/form-data'>
                <input  type='file' name='poster' />
                <button>submit</button>
            </form>
        </div>
    )
}
export default Photo