import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import OurWork from './GalleryComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }
    
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' render={() => <Home />} />
                    <Route exact path='/gallery' render={() => <OurWork />} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default Main;