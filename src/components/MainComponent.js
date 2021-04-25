import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { JOBS } from '../shared/jobs';


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
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default Main;