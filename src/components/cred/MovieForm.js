import React from 'react';
import axios from 'axios'


class MovieForm extends React.Component{

    state={title:'',starcast:'',}
    componentDidMount = async() =>{

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
        const year = e.target.value
        this.setState({year})
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
        formData.append('poster',this.state.poster)
        formData.append('screenshot',this.state.screenshot)
        formData.append('title',this.state.title)
        formData.append('imdb',this.state.imdb)
        formData.append('starcast',this.state.starcast)
        formData.append('director',this.state.director)
        formData.append('description',this.state.description)
        formData.append('genre',this.state.genre)
        formData.append('category',this.state.category)
        formData.append('release_data',this.state.year)
        formData.append('download_link',this.state.download_link)
        formData.append('torrent_link',this.state.torrent_link)
        formData.append('stream_link',this.state.stream_link)
        const response = await axios({
            url:'http://localhost:3001/movie',
            method: 'post',
            data:formData,
            headers: {
                'Content-Type': 'multipart/form-data; boundary=${form._boundary}'
              }
        })
        console.log(response)

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
                        placeholder='year'
                        onChange={this.onYearChange}
                        defaultValue={this.state.date}
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
                        <option>Advanture</option>
                        <option>Comedy</option>
                        <option>Crime</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Historical</option>
                        <option>Horror</option>
                        <option>Mystery</option>
                        <option>Romance</option>
                        <option>Sci-Fi</option>
                        <option>Thriller</option>
                    </select>
                    <input 
                        name='download_link'
                        placeholder='Download Link'
                        onChange={this.state.onDownloadLinkChange}
                        defaultValue={this.state.download_link}
                    />
                    <input 
                        name='torrent_link'
                        placeholder='Torrent Link'
                        onChange={this.state.onTorrentLinkChange}
                        defaultValue={this.state.torrent_link}
                    />
                    <input 
                        name='stream_link'
                        placeholder='Stream Link'
                        onChange={this.state.onStreamLinkChange}
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
                {this.state.poster && <img src={URL.createObjectURL(this.state.poster)}alt='img' />}
            </div>
        )
    }
}

export default MovieForm