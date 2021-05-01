import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem,
    Button, Forms, FormGroup, Label, Input, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
    }

    render() {

        return (

            <div className="row row-content">
                <div className="col-12">
                    <h2>Contact Us Today
                    <h3>Your Information</h3>
                    </h2>
                    <hr />
                </div>
                <div className="col-md-10">
                    <FormGroup row model="feedbackForm" onSubmit={values => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="fullName" md={2}>Name or Business Name</Label>
                            <Col md={10}>
                                <Input model=".fullName" id="fullName" name="fullName"
                                    placeholder="Your Name or Business Name"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="phoneNum" md={2}>Phone</Label>
                            <Col md={10}>
                                <Input model=".phoneNum" id="phoneNum" name="phoneNum"
                                    placeholder="Phone number"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(10),
                                        maxLength: maxLength(15),
                                        isNumber
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    validators={{
                                        required,
                                        validEmail
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 4, offset: 2 }}>
                                <div className="form-check">
                                    <Label check>
                                        <Input
                                            model=".agree"
                                            name="agree"
                                            className="form-check-input"
                                        /> {' '}
                                        <strong>Job Type:</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={4}>
                                <Input model=".jobType" name="jobType"
                                    ClassName="form-control">
                                    <option>Residential</option>
                                    <option>Commercial</option>
                                    <option>Industrial</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="feedback" md={2}>Tell Us About It</Label>
                            <Col md={10}>
                                <Input model=".feedback" id="feedback" name="feedback"
                                    placeholder="Don't pull the plug, tell us about it"
                                    rows="12"
                                    ClassName="form-control"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Send Message
                                </Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </div>
            </div>
        );
    }
}

export default Contact;