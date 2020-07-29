import React from 'react'
import axios from 'axios'
import Container from './Container'


class GenreNav extends React.Component{
    state={movies:[],page:1}
    componentDidMount = async () =>{
        if(this.props){
            const response = await axios({
                url: 'https://quickmovies.herokuapp.com/movies/'+this.props.match.params.genre,
            })
            this.setState({movies:response.data})
            
        } else {
            

        }
        
    }
    PaginationHandler= async() =>{
        console.log('clicked')
        this.setState({button_state:true})
        await this.setState({page:this.state.page+1})
        const response = await axios({
            url: 'https://quickmovies.herokuapp.com/movies/'+this.props.match.params.genre+'?page='+this.state.page,
        })
        
        response.data.length<15?this.setState({button_state:true}):this.setState({button_state:false})
        if(response.data){
            this.setState((prevState=>({movies:prevState.movies.concat(response.data)})))
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
                <div>
                    <button 
                        className={'back-button'}
                        onClick={this.PaginationHandler}
                        disabled={this.state.button_state}
                    ><span className='load_more'>Load More</span> </button>
                </div>
            </div>
            
        )
    }
}


export default GenreNav 