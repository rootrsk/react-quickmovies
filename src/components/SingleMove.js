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
                year: this.props.location.state.release_date,
                starcast : this.props.location.state.starcast,
                director: this.props.location.state.director,
                description: this.props.location.state.description,
                poster: this.props.location.state.poster,
                screenshot : this.props.location.state.screenshot,
                download_link:this.props.location.state.download_link,
                torrent_link:this.props.location.state.torrent_link,
                stream_link:this.props.location.state.stream_link,
                Poster : this.props.location.state.Poster
            })
        }
    }

    render(){
        return(
            <div className='single-movie_main-div'>
                <div>
                    <button 
                        className={'back-button'}
                        onClick={()=>{
                            window.history.back()
                        }}
                    > &#171;</button>
                </div> 

                <div className='single-movie_details'>
                    <h1 className='des_movie-title'>{this.state.title}</h1>
                    <MoviePosterRender poster={this.state.Poster}/>

                    <div className='des_movie-details'>
                        <p>IMDb Rating : {this.state.imdb} </p>
                        <p>Genere : {this.state.genre} </p>
                        <p>Release Date : {this.state.year}</p>
                        <p className='description'>Star Cast : {this.state.starcast}</p>
                        <p>Director: {this.state.director}</p>
                        <p className='description'>Description : {this.state.description}</p>
                    </div>
                    
                    <div className='download-link'>
                        {this.state.download_link && <a href={this.state.download_link}>Download Link</a>}
                        {this.state.torrent_link && <a href={this.state.torrent_link}>Torrent Link</a>}
                        {this.state.stream_link && <a href={this.state.stream_link}>Stream Link</a>}
                    </div>
                </div>
                
                
            </div>
        )
    }
}


const MoviePosterRender = (props) =>{
    return(
        <div className='des_movie-poster'>
            <img  src={props.poster} alt='movie-poster' />
        </div>
    )
}

// const MovieScreenShotRender = (props) =>{
//     return(
//         <div className='des_movie-poster'>
//             <img className='img-2' src={props.screenshot} alt='movie-poster' />
//         </div>
//     )
// }

// const MovieDetalisRender = () =>{
//     return(
//         <div>

//         </div>
//     )
// }

export default SingleMovie 