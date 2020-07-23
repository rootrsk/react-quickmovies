import React from 'react';
import axios from 'axios'
import Container from '../Container'
import { Link } from 'react-router-dom';

class Romance extends React.Component{
    state={movies:[]}
    componentDidMount = async() =>{
        const response = await axios('http://localhost:3001/movies')
        this.setState({movies:response.data})
    }
    render(){
        return(
            <div className='container'>
                <div className='slider-header'>
                    <div className='genere'>Advanture</div>
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

export default Romance