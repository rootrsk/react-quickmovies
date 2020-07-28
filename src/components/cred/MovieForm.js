import React from 'react';
import axios from 'axios'


class MovieForm extends React.Component{

    state={title:'',starcast:'',download_link:'',torrent_link:'',stream_link:''}
    componentDidMount = async() =>{
        if(this.props.id){
            const response = await axios({
                url:'https://quickmovies.herokuapp.com/movie/'+this.props.id,
            })
            this.setState(response.data)
        }
    }
    onFindMovieDetails = async(e) =>{
        const i = e.target.value
        const response = await axios({
            url:`http://www.omdbapi.com/?i=${i}&apikey=ce5aafa9`
        })
        if(response.data.Title){
            this.setState({
                title : response.data.Title,
                imdb : response.data.imdbRating,
                starcast : response.data.Actors,
                genre : response.data.Genre,
                release_date : response.data.Released,
                director : response.data.Director,
                description : response.data.Plot,
                Poster : response.data.Poster
            })

            console.log(this.state)
        }
    }
    onTitleChange = (e) =>{
        const title = e.target.value
        this.setState({title})
    }
    onStarcastChange = (e) =>{
        const starcast = e.target.value
        this.setState({starcast})
    }
    onDirectorChange = (e)=>{
        const director = e.target.value
        this.setState({director})
    }
    onImdbChange = (e) =>{
        const imdb = e.target.value
        this.setState({imdb})
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState({description})
    }
    onYearChange = (e) =>{
        const release_date = e.target.value
        console.log(release_date)
        this.setState({release_date})
    }
    onGenreChange = (e) =>{
        const genre =Array.from(e.target.selectedOptions,(option)=>option.value) 
        this.setState({genre})
    }
    onDownloadLinkChange = (e) =>{
        
        const download_link = e.target.value
        this.setState({download_link})
    }
    onStreamLinkChange = (e) =>{
        const stream_link = e.target.value
        this.setState({stream_link})
    }
    onTorrentLinkChange = (e) =>{
        const torrent_link = e.target.value
        this.setState({torrent_link})
    }
    onPosterChange = (e) =>{
        const poster = e.target.files[0]
        this.setState({poster})
        
    }
    onScreenShotChange = (e) =>{
        const screenshot = e.target.files[0]
        this.setState({screenshot})
    }
    onSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('title',this.state.title)
        formData.append('imdb',this.state.imdb)
        formData.append('starcast',this.state.starcast)
        formData.append('director',this.state.director)
        formData.append('description',this.state.description)
        formData.append('genre',this.state.genre)
        formData.append('category',this.state.category)
        formData.append('release_date',this.state.release_date)
        formData.append('download_link',this.state.download_link)
        formData.append('Poster',this.state.Poster)
        console.log(this.state)
        if(this.state.poster){
            formData.append('poster',this.state.poster)
        }
        if(this.state.screenshot){
            formData.append('screenshot',this.state.screenshot)
        }
        formData.append('torrent_link',this.state.torrent_link)
        formData.append('stream_link',this.state.stream_link)
        if(this.props.Operation ==='create'){
            console.log(this.props.Operation)
            const response = await axios({
                url:'https://quickmovies.herokuapp.com/movie',
                // url:'http://localhost:3001/movie',
                method: 'post',
                data:formData,
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${'formData._boundary'}`
                }
            })
            console.log(response)

        }
        if(this.props.Operation==='update'){
            const response = await axios({
                url:'https://quickmovies.herokuapp.com/movie/'+this.state._id,
                method: 'patch',
                data:formData,
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=${form._boundary}'
                }
            })
            console.log(response)
        }
        if(this.props.Operation==='delete'){
            const response = await axios({
                url:'https://quickmovies.herokuapp.com/movie/'+this.state._id,
                // url: 'http://localhost:3001/movie/'+this.state._id,
                method: 'delete'
            })
            console.log(response)
        }

    }
    render(){
        return(
            <div className='form'>
                <form onSubmit={this.onSubmit} encType='multipart/form-data'>
                    <input 
                        name='title'
                        type='text'
                        placeholder='Title'
                        onChange={this.onTitleChange}
                        defaultValue={this.state.title}
                    />

                    <input 
                        name='starcast'
                        type='text'
                        placeholder='Starcast'
                        onChange={this.onStarcastChange}
                        defaultValue={this.state.starcast}
                    />
                    
                    <input 
                        name='director'
                        type='text'
                        placeholder='Director'
                        onChange={this.onDirectorChange}
                        defaultValue={this.state.director}
                    />
                    <input 
                        name='imdb'
                        type='number'
                        step='0.01'
                        placeholder='IMDb'onChange={this.onImdbChange}
                        defaultValue={this.state.imdb}
                    />
                    <input 
                        name='release_date'
                        type='date'
                        placeholder='release_date'
                        onChange={this.onYearChange}
                        defaultValue={this.state.release_date}
                        
                    />
                    <textarea 
                        name='description'
                        placeholder='Description'
                        onChange={this.onDescriptionChange}
                        defaultValue={this.state.description}
                        
                    />
                    <select 
                        multiple onChange={this.onGenreChange} 
                        defaultValue={this.state.genre}
                        
                    >
                        <option>Action</option>
                        <option>Adult</option>
                        <option>Adventure</option>
                        <option>Comedy</option>
                        <option>Crime</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>History</option>
                        <option>Horror</option>
                        <option>Mystery</option>
                        <option>Romance</option>
                        <option>Sci-Fi</option>
                        <option>Thriller</option>
                    </select>
                    <input defaultValue={this.state.genre} />

                    <input 
                        name='download_link'
                        placeholder='Download Link'
                        onChange={this.onDownloadLinkChange}
                        defaultValue={this.state.download_link}
                    />
                    <input 
                        name='torrent_link'
                        placeholder='Torrent Link'
                        onChange={this.onTorrentLinkChange}
                        defaultValue={this.state.torrent_link}
                    />
                    <input 
                        name='stream_link'
                        placeholder='Stream Link'
                        onChange={this.onStreamLinkChange}
                        defaultValue={this.state.stream_link}
                    />


                    <input 
                        type='file' 
                        name='poster' 
                        onChange={this.onPosterChange}
                    />
                    <input 
                        type='file' 
                        name='screenshot' 
                        onChange={this.onScreenShotChange}
                    />
                    <button>Submit</button>
                </form>
                {this.state.Poster && <img src={this.state.Poster} className='des_movie-poster' alt='img' />}
                {this.state.poster && <img src={this.state.poster} alt='img' />}
                
                <div>
                    <input 
                        type='search' 
                        onChange={this.onFindMovieDetails}
                        placeholder='Enter imdb tt'
                    />
                </div>
            </div>
        )
    }
}

export default MovieForm