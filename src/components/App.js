import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import GenreNav from './GenreNav'
import SingleMovie from './SingleMove'
import CreateMovie from './cred/MovieForm'
import Photo from './cred/Photo';


class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch >
                        <Route exact path='/'  component={HomePage} />
                        <Route exact path='/genre' component={GenreNav}/>
                        <Route  path='/movie/:id' render={(props)=> <SingleMovie  {...props} /> }  />
                        <Route  path='/movie-create' component={CreateMovie} />
                        <Route  path='/photo' component={Photo} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


export default  App