import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import GenreNav from './GenreNav'
import SingleMovie from './SingleMove'
import Crud from './cred/Crud'
import Movies from './cred/Movies';
import Header from './Header'

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch >
                        <Route exact path='/'  component={HomePage} />
                        <Route exact path='/genre/:genre' component={GenreNav}/>
                        <Route  path='/movie/:id' render={(props)=> <SingleMovie  {...props} /> }  />
                        <Route  path='/crud/:operation/:id'  component={Crud}/>
                        <Route  path='/movies'  component={Movies} />   
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


export default  App