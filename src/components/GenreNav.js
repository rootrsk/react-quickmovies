import React from 'react'
import axios from 'axios'
import Container from './Container'
import GenreMovieHeader from './GenreNavHeader'


class GenreNav extends React.Component{
    state={movies:[]}
    componentDidMount = async () =>{
        const response = await axios('https://quickmovies.herokuapp.com/movies')
        this.setState({movies:response.data})
    }

    render(){
        return(
            <div>
                <GenreMovieHeader />
                <div className='genre-slider'>
                    {this.state.movies.map((movie)=>{
                        return(
                            <Container movie={movie} key={movie._id} />
                        )
                    })}
                </div>
            </div>
            
        )
    }
}


export default GenreNav 