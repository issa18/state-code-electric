import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { GALLERY } from '../shared/gallery';
import { RESIDENTIAL } from '../shared/residential';
import { COMMERCIAL } from '../shared/commercial';
import { INDUSTRIAL } from '../shared/industrial';

function RenderImages({image}) {
    return(
        
        <div className="col">
            <img src={image.image} alt={image.type} width='325'/>
        </div>
        
    );
}

function RenderElectricionImage({image}) {
    return(
        <>
        <img src={image.image} alt={image.type} width='625'/>
        </>
    );
}


class OurWork extends Component {
    constructor(props) {
        super(props);

        this.state ={
            gallery: GALLERY,
            residential: RESIDENTIAL,
            commercial: COMMERCIAL,
            industrial: INDUSTRIAL
        }
    }

    render() {

        const electricianImage = this.state.gallery.map(image => {
            return(
                <div key={image.id}>
                    <RenderElectricionImage image={image} />
                </div>
            );
        });

        const residentialImages = this.state.residential.map(image => {
            return(
                <div key={image.id}>
                    <RenderImages image={image} />
                </div>
            );
        });

        const commercialImages = this.state.commercial.map(image => {
            return(
                <div key={image.id}>
                    <RenderImages image={image} />
                </div>
            );
        });

        const industrialImages = this.state.industrial.map(image => {
            return(
                <div key={image.id}>
                    <RenderImages image={image} />
                </div>
            );
        });

        return(
            <div className="container gallery">
                <div className="row row-top">
                    <h2>Services and Portfolio</h2>
                </div>
                <div className="row row-content">
                    <h3 className="mr-md-5">
                        <br />Licensed and Insured<br />
                        Reliable and Affordabel Services<br />
                        Free Estimates<br />
                        Call Us: (123)456-7890
                    </h3>
                    <div className="ml-md-5">
                        {electricianImage}
                    </div>
                </div>
                <div className="row row-top ml-1">
                    <h2>Residential</h2>
                </div>
                <div className="row row-content">
                    {residentialImages}
                </div>
                <div className="row row-top ml-1">
                    <h2>Commercial</h2>
                </div>
                <div className="row row-content">
                    {commercialImages}
                </div>
                <div className="row row-top ml-1">
                    <h2>Industrial</h2>
                </div>
                <div className="row row-content">
                    {industrialImages}
                </div>
            </div>
        );
    }
}

export default OurWork;