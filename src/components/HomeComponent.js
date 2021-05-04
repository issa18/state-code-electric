import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { JOBS } from '../shared/jobs';


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

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: JOBS
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
                        <div className="col-sm-6 col-md-3">
                            <span><i className="fa fa-cogs fa-5x" aria-hidden="true"></i></span><br/>
                            <p className="mt-2">New Construction, Remodels & Repairs</p>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <span><i className="fa fa-wrench fa-5x" aria-hidden="true"></i></span><br/>
                            <p className="mt-2">Troubleshoot/ Repair</p>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <span><i className="fa fa-lightbulb-o fa-5x" aria-hidden="true"></i></span><br/>
                            <p className="mt-2">Lighting</p>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <span><i className="fa fa-plug fa-5x" aria-hidden="true"></i></span><br/>
                            <p className="mt-2">Electrical Outlet</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-sm-6 col-md-3">
                            <span><i className="fa fa-microchip fa-5x" aria-hidden="true"></i></span><br/>
                            <p className="mt-2">Electric Panel/Breaker Box</p>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <span><i className="fa fa-home fa-5x" aria-hidden="true"></i></span><br/>
                            <p className="mt-2">Home Surge Protection</p>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <span><i className="fa fa-photo fa-5x" aria-hidden="true"></i></span><br/>
                            <p className="mt-2">Landscaping Lighting</p>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <span><i className="fa fa-certificate fa-5x" aria-hidden="true"></i></span><br/>
                            <p className="mt-2">100% Licensed and Insured</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;