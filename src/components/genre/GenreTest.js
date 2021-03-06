import React from 'react';
import axios from 'axios'
import Container from '../Container'
import { Link } from 'react-router-dom';

class GenreTest extends React.Component{
    state={movies:[]}
    componentDidMount = async() =>{
        const response = await axios('https://quickmovies.herokuapp.com/movies')
        this.setState({movies:response.data})
    }
    render(){
        return(
            <div className='container'>
                <div className='slider-header'>
                    <div className='genere'>{this.props.genre}</div>
                    <Link to='#' className='view-more'>View More</Link>
                </div>
                    <div className='slider'>
                        {this.state.movies.map((movie)=>{
                            return <Container movie={movie} key={movie.id}/>
                        })}
                    </div>
            </div>
        )
    }
}

export default GenreTest