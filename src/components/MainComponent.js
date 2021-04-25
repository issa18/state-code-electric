import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';

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
                    
                </Switch>
            </div>
        );
    }
}

export default Main;