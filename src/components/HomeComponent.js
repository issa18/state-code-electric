import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { JOBS } from '../shared/jobs';


function RenderJobsItem({job}) {
    return(
        <div>
            <Card>
                <CardTitle className="text-center pt-3"><h3>{job.name}</h3></CardTitle>
                <CardImg width="100%" src={job.image} alt={job.name} />
                <CardBody>
                    <CardText>{job.caption}</CardText>
                </CardBody>
            </Card>
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
                <div key={job.id} className="col-md row-top">
                    <RenderJobsItem job={job} />
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row row-content">
                    {homeGallery}
                </div>
            </div>
        );
    }
}

export default Home;