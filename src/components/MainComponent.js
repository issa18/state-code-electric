import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
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
                    <Route exact path='/gallery' render={() => <OurWork />} />
                </Switch>
            </div>
        );
    }
}

export default Main;