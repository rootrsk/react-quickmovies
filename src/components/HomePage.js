import React from 'react';
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
                <Genre genre={'Mystery'} key={Math.random()*100}/>
                <Genre genre={'Romance'} key={Math.random()*100}/>
                <Genre genre={'Sci-Fi'} key={Math.random()*100}/>
                <Genre genre={'Thriller'} key={Math.random()*100}/>
            </div>
        )
    }
}
export default HomePage