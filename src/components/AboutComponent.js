import React, { Component } from 'react';
import { JOBS } from '../shared/jobs'
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Collapse } from 'reactstrap'

function RenderServicesItem({ job }) {
    if(job) {
        return (
            <div>
                <Card>
                    <CardTitle className="text-center pt-3"><h3>{job.name}</h3></CardTitle>
                    <CardImg width="100%" src={job.image} alt={job.name} />
                    <CardBody>
                        <CardText>{job.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    return <div />
}

class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            jobs: JOBS,
            isResidentialOpen: false,
            isCommercialOpen: false,
            isIndustrialOpen: false
        };

        this.toggleResidential = this.toggleResidential.bind(this);
        this.toggleCommercial = this.toggleCommercial.bind(this);
        this.toggleIndustrial = this.toggleIndustrial.bind(this);
    }

    toggleResidential() {
        this.setState({
            isResidentialOpen: !this.state.isResidentialOpen
        });
    }

    toggleCommercial() {
        this.setState({
            isCommercialOpen: !this.state.isCommercialOpen
        });
    }

    toggleIndustrial() {
        this.setState({
            isIndustrialOpen: !this.state.isIndustrialOpen
        });
    }

    render() {

        return(
            <div className='container'>
                <div className='row row-top'>
                    <h2>Don't Pull the Plug, Call Us!</h2>
                    <p>Have one of our certified people do the job. We can identify potential electrical issues before it's too late to save you money and headaches. If you are looking for a professional electrical repair contractor to help you troubleshoot or conduct Safety Inspections on your Residential or Commercial project or remodel, then turn to State Code Electric by calling (123)456-7890 or schedule a visit today!</p>
                </div>
                <div className="container bg-light row-top">
                    <h2>Services</h2>
                    <div className="container">
                        <div onClick={this.toggleResidential} className="row serviceItems">
                            <h3>Residential</h3>
                            <Collapse isOpen={this.state.isResidentialOpen} toggle={this.toggleCard}>
                                <div>
                                    <RenderServicesItem job={this.state.jobs.filter(job => job.description)[0]}/>
                                </div>
                            </Collapse>
                        </div>
                        <div onClick={this.toggleCommercial} className="row serviceItems">
                            <h3>Commercial</h3>
                            <Collapse isOpen={this.state.isCommercialOpen} toggle={this.toggleCommercial}>
                                <div>
                                    <RenderServicesItem job={this.state.jobs.filter(job => job.description)[1]}/>
                                </div>
                            </Collapse>
                        </div>
                        <div onClick={this.toggleIndustrial} className="row serviceItems">
                            <h3>Industrial</h3>
                            <Collapse isOpen={this.state.isIndustrialOpen} toggle={this.toggleIndustrial}>
                                <div>
                                    <RenderServicesItem job={this.state.jobs.filter(job => job.description)[2]}/>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;