import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import Axios from 'axios';

class Movies extends React.Component{
    state={movies:[]}
    componentDidMount = async() =>{
        const response =  await Axios({
            // url:'http://localhost:3001/movies',
            url:'https://quickmovies.herokuapp.com/movies',
            method:'get'

        })
        this.setState({movies:response.data})
    }
    render(){
        return(
            <div className='admin-movies'>
                {this.state.movies.map((movie)=>{
                    return <Container movie={movie} key={movie.id} />
                })}
            </div>
        )
    }
}
const Container = (props)=>{
    return(
        <div className='slides'>
            <div>
                <div className='title'>{props.movie.title} </div>
                
                
            </div>
            <img src={props.movie.poster} alt='poster' className='img' />
            <div className='bottom'>
                <NavLink to={'crud/delete/'+props.movie._id} >Delete</NavLink>
                <NavLink to={'crud/update/'+props.movie._id} >Update</NavLink>
            </div>
            
        </div>
    )
}

export default Movies