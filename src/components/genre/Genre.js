import React from 'react';
import axios from 'axios'
import Container from '../Container'
import { Link } from 'react-router-dom';

class Genre extends React.Component{
    state={movies:[]}
    componentDidMount = async() =>{
        const BASE_URL = process.env.BASE_URL || 'https://quickmovies.herokuapp.com/'
        // const Localhost = 'http://localhost:3001/movies/'
        const response = await axios(BASE_URL+'movies/'+this.props.genre)
        const movies = response.data.filter((movie)=>{
            return movie.genre.toLowerCase().includes('action')
        })
        console.log(movies)
        this.setState({movies:movies})
    }
    render(){
        return(
            <div className='container'>
                <div className='slider-header'>
                    <div className='genere'>{this.props.genre}</div>
                    <Link to='/genre' className='view-more'>View More</Link>
                </div>
                    <div className='slider'>
                        {this.state.movies.map((movie)=>{
                            return <Container movie={movie} key={movie._id}/>
                        })}
                    </div>
            </div>
        )
    }
}

export default Genre