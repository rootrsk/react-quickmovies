import React from 'react';
import Genre from './genre/Genre'
import { Helmet } from 'react-helmet';

class HomePage extends React.Component{
    state={movies:[1,2,3,4,5,6,7,8,9,10]}
    componentDidMount = async() =>{
       
    }
    render(){
        return(
            <div>
                <Genre genre={'Action'} key={Math.random()*100}/>
                <Genre genre={'Adventure'} key={Math.random()*100}/>
                <Genre genre={'Comedy'} key={Math.random()*100}/>
                <Genre genre={'Crime'} key={Math.random()*100}/>
                <Genre genre={'Drama'} key={Math.random()*100}/>
                <Genre genre={'Fantasy'} key={Math.random()*100}/>
                <Genre genre={'History'} key={Math.random()*100}/>
                <Genre genre={'Horror'} key={Math.random()*100}/>
                <Genre genre={'Mystery'} key={Math.random()*100}/>
                <Genre genre={'Romance'} key={Math.random()*100}/>
                <Genre genre={'Sci-Fi'} key={Math.random()*100}/>
                <Genre genre={'Thriller'} key={Math.random()*100}/>
                <div>
                    <Helmet>
                        <title>Quickmovies</title>
                        <meta name='keyword' content='Quickmovies.xyz,Dual audio Movies ' />
                        <meta name='description' content='All Types Of Moveis Are Available Here' />
                    </Helmet>
                </div>
            </div>
            
        )
    }
}
export default HomePage