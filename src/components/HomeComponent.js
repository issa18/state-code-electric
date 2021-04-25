import React, { Component } from 'react';
import {  } from 'reactstrap'
import { JOBS } from '../shared/jobs';


function RenderJobsItem({job}) {
    return(
        <div>
            <img width="250" src={job.image} alt={job.name} />
        </div>
    );
}

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: JOBS
        };
    }


    render() {

        const homeGallery = this.state.jobs.map(job => {
            return(
                <div key={job.id}>
                    <RenderJobsItem job={job} />
                </div>
            );
        });

        return(
            <div>
                {homeGallery}
            </div>
        );
    }
}

export default Home;