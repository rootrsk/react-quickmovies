import React from 'react'
import axios from 'axios'
import Container from './Container'
import { Helmet } from 'react-helmet';


class GenreNav extends React.Component{
    state={movies:[],page:1,button_text:'Load More'}
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
        this.setState({button_state:true})
        await this.setState({page:this.state.page+1})
        this.setState({button_text:'Loading...'})
        console.log(this.state.page)
        const response = await axios({
            url: 'https://quickmovies.herokuapp.com/movies/'+this.props.match.params.genre+'?page='+this.state.page,
            
        })
        response.data.length<15?this.setState({button_state:true}):this.setState({button_state:false})
        if(response.data){
            this.setState((prevState=>({movies:prevState.movies.concat(response.data)})))
            if(this.state.button_state===true) this.setState({button_text:'No More To Load'})
            this.state.button_state===true?this.setState({button_text:'No More To Load'}):this.setState({button_text:'Load More'})
            
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
                    ><span className='load_more'>{this.state.button_text}</span> </button>
                </div>
                <Helmet >
                    <title>{this.props.match.params.genre.toUpperCase()}</title>
                    <meta name={'description'} content={this.props.match.params.genre} />
                </Helmet>
            </div>
            
        )
    }
}


export default GenreNav 