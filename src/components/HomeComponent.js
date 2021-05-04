import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { JOBS } from '../shared/jobs';
import { SERVICES } from '../shared/services';


function RenderJobsItem({ job }) {
    return (
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

function RenderServicesItem({service}) {
    return (
        <div>
            <span><i className={service.icon} aria-hidden="true"></i></span><br/>
            <p className="mt-2">{service.name}</p>
        </div>
    );
}

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: JOBS,
            services: SERVICES
        };
    }


    render() {

        const homeGallery = this.state.jobs.map(job => {
            return (
                <div key={job.id} className="col-md row-top">
                    <RenderJobsItem job={job} />
                </div>
            );
        });

        const serviceIcon = this.state.services.map(service => {
            return(
                <div key={service.id} className="col-sm-6 col-md-3">
                    <RenderServicesItem service={service} />
                </div>
            );
        });

        return (
            <>
                <div className="container">
                    <div className="row row-top">
                        <div className="col">
                        <h2>Our Mission</h2>
                        Our Mission here at State Code Electric, we pride ourselves of our quality work, safety, and our clients. We stand behind our work and that means putting quality control process in place to make sure the work is done accurate. Safety is a top priority when working on any job. Our clients are whom we strive to satisfy from renovating your home to installing industrial lighting. Whatever the job is you can trust us to get the job done!
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-content">
                        {homeGallery}
                    </div>
                </div>
                <div className="container row-content bg-light">
                    <div className="row">
                        <div className="col text-center">
                            <h1>Our Services</h1>
                        </div>
                    </div>

                    <div className="row text-center">
                        {serviceIcon}
                    </div>
                </div>
            </>
        );
    }
}

export default Home;