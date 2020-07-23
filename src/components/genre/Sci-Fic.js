import React from 'react';
import axios from 'axios'
import Container from '../Container'

class SciFic extends React.Component{
    state={movies:[]}
    componentDidMount = async() =>{
        const response = await axios('http://localhost:3001/movies')
        this.setState({movies:response.data})
    }
    render(){
        return(
            <div className='container'>
                <div className='genere'>Sci-Fic</div>
                    <div className='slider'>
                        {this.state.movies.map((movie)=>{
                            return <Container movie={movie} key={movie.id}/>
                        })}
                    </div>
            </div>
        )
    }
}

export default SciFic