import React from 'react';


class SingleMovie extends React.Component{
    state={}
    componentDidMount = async () =>{
        console.log(this.props)
        if(this.props.location.state){
            console.log(this.props.location.state)
            this.setState({movie:this.props.location})
            this.setState({
                id: this.props.location.state.id,
                title: this.props.location.state.title,
                genre: this.props.location.state.genre,
                imdb: this.props.location.state.imdb,
                category:this.props.location.state.category ,
                year: this.props.location.state.year,
                starcast : this.props.location.state.starcast,
                director: this.props.location.state.director,
                description: this.props.location.state.description,
                poster: this.props.location.state.poster,
                screenshot : this.props.location.state.screenshot
            })
        }
        console.log(this.state)
    }

    render(){
        return(
            <div className='single-movie'>
                <div className='single-movie_details'>

                    <button 
                        className={'back-button'}
                        onClick={()=>{
                            window.history.back()
                        }}
                    > &#171;</button>
                    <h1 className='des_movie-title'>{this.state.title}</h1>
                    <MoviePosterRender poster={this.state.poster}/>
                    <div className='des_movie-details'>
                        <p>IMDb Rating : {this.state.imdb} </p>
                        <p>Genere : {this.state.genre} </p>
                        <p>Release Date : {this.state.year}</p>
                        <p>Star Cast : {this.state.starcast}</p>
                        <p>Director: {this.state.director}</p>
                        <p>Description : {this.state.description}</p>
                        
                    </div>
                    <div>
                        {}
                    </div>
                    {/* <MovieScreenShotRender screenshot={this.state.poster} /> */}
                </div>
                
                
            </div>
        )
    }
}


const MoviePosterRender = (props) =>{
    return(
        <div className='des_movie-poster'>
            <img className='img' src={props.poster} alt='movie-poster' />
        </div>
    )
}

const MovieScreenShotRender = (props) =>{
    return(
        <div className='des_movie-poster'>
            <img className='img-2' src={props.screenshot} alt='movie-poster' />
        </div>
    )
}

const MovieDetalisRender = () =>{
    return(
        <div>

        </div>
    )
}

export default SingleMovie 