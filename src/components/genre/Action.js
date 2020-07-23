import React from 'react';
import axios from 'axios'
import Container from '../Container'
import { Link } from 'react-router-dom';

class Action extends React.Component{
    state={movies:[]}
    componentDidMount = async() =>{
        const response = await axios('http://localhost:3001/movies/action')
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
                    <div className='genere'>Action</div>
                    <Link to='/genre' className='view-more'>View More</Link>
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

export default Action