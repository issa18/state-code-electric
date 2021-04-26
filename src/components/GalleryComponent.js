import React, { Component } from 'react';
import { GALLERY } from '../shared/gallery';
import { RESIDENTIAL } from '../shared/residential';
import { COMMERCIAL } from '../shared/commercial';
import { INDUSTRIAL } from '../shared/industrial';

function RenderImages({image}) {
    return(
        <div className="col">
            <img src={image.image} width="400" />
        </div>
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

        const electricianImages = this.state.gallery.map(image => {
            return(
                <div key={image.id}>
                    <RenderImages image={image} />
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
            <div className="contianer">
                <div className="row">
                    {electricianImages}
                </div>
                <div className="row">
                    <h2>Residential</h2>
                </div>
                <div className="row">
                    {residentialImages}
                </div>
                <div className="row">
                    {commercialImages}
                </div>
                <div className="row">
                    {industrialImages}
                </div>
            </div>
        );
    }
}

export default OurWork;