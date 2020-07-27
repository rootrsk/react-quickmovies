import React from 'react'
import axios from 'axios'
import Container from './Container'
import GenreMovieHeader from './GenreNavHeader'


class GenreNav extends React.Component{
    state={movies:[]}
    componentDidMount = async () =>{
        if(this.props){
            const response = await axios({
                url: 'https://quickmovies.herokuapp.com/movies/'+this.props.match.params.genre,
            })
            this.setState({movies:response.data})
        } else {
            

        }
        
    }

    render(){
        return(
            <div className='genre-main_div'>
                <div>
                    <button 
                        className={'back-button'}
                        onClick={()=>{
                            window.history.back()
                        }}
                    > &#171;</button>
                </div>
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