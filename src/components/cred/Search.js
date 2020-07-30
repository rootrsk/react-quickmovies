import React from 'react';
import Container from '../Container'
import { Helmet } from 'react-helmet';


class Search extends React.Component{
    componentDidMount = () =>{
        console.log(this.props.history)
    }
    render() {
        return(
            <div>
                <button 
                    className={'back-button'}
                        onClick={()=>{  
                            this.props.history.push('/')
                        }}
                > &#171;</button>
                {this.props.history.location.response&&<MovieRender movies={this.props.history.location.response} />}
                <Helmet>
                    <title>Search</title>
                    <meta name='descrption' content='Search all type of movies here.'/>
                </Helmet>
                
            </div>
        )
    }
}



const MovieRender= (props) =>{
    return(
        <div>
            <div className='genre-main_div'>
                <div>
                    
                </div>
                <div className='genre-slider'>
                    {props.movies.map((movie)=>{
                        return(
                            <Container movie={movie} key={movie._id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Search