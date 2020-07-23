import React from 'react';
import Adult from './genre/Adult'
import Advanture from './genre/Advanture'
import Comedy from './genre/Comedy'
import Crime from './genre/Crime'
import Fantasy from './genre/Fantasy'
import Historical from './genre/Historical'
import Horror from './genre/Horror'
import Mystery from './genre/Mystery'
import Romance from './genre/Romance'
import SciFic from './genre/Sci-Fic'
import GenreTest from './genre/GenreTest'
import Genre from './genre/Genre'

class HomePage extends React.Component{
    state={movies:[1,2,3,4,5,6,7,8,9,10]}
    componentDidMount = async() =>{
       
    }
    render(){
        return(
            <div>
                <Genre genre={'Action'} key={Math.random()*100}/>
                <Genre genre={'Advanture'} key={Math.random()*100}/>
                <Genre genre={'Comedy'} key={Math.random()*100}/>
                <Genre genre={'Crime'} key={Math.random()*100}/>
                <Genre genre={'Drama'} key={Math.random()*100}/>
                <Genre genre={'Fantasy'} key={Math.random()*100}/>
                <Genre genre={'Historical'} key={Math.random()*100}/>
                <Genre genre={'Horror'} key={Math.random()*100}/>
                <Genre genre={'Mistry'} key={Math.random()*100}/>
                <Genre genre={'Romance'} key={Math.random()*100}/>
                <Genre genre={'Sci-Fi'} key={Math.random()*100}/>
                <Genre genre={'Thriller'} key={Math.random()*100}/>
                <GenreTest genre={'Drama'} />
                <GenreTest genre='Thriller'/>
            </div>
        )
    }
}
export default HomePage