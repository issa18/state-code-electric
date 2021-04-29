import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (

            <>
                <Navbar className="navbar-call-us" sticky="top">
                    <div className="container">
                        <div className="row nav-call-us text-light">
                            <h6>
                                Call Us At:{' '}
                                <a href="tel:+11234567890">
                                    <i className="fa fa-phone fa-lg" /> 1-123-456-7890
                        </a>{' '}
                        Se habla Espanol!
                        </h6>
                        </div>
                    </div>
                </Navbar>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-6 order-lg-1 order-2">
                                <h1>State Code Electric</h1>
                                <h3>Don't Pull the Plug, Call Us!</h3>
                                <Button className="mt-4 btn-lg text-nowrap" outline color="light">Schedule a Visit</Button>
                            </div>
                            <div className="col order-md-2 order-1">
                                <img className="img-fluid" src="/images/logo.png" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <div>
                            <NavbarBrand href="/"><img src="/images/logo.png" height="32" alt="State Code Electric Logo" /></NavbarBrand>
                        </div>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <div className="px-lg-5 px-md-3 text-nowrap">
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <i class="fa fa-home fa-lg" /> Home
                                        </NavLink>
                                    </NavItem>
                                </div>
                                <div className="px-lg-5 px-md-3 text-nowrap">
                                    <NavItem>
                                        <NavLink className="nav-link" to="/about">
                                            <i class="fa fa-info fa-lg"></i> About
                                        </NavLink>
                                    </NavItem>
                                </div>
                                <div className="px-lg-5 px-md-3 text-nowrap">
                                    <NavItem>
                                        <NavLink className="nav-link" to="/gallery">
                                            <i class="fa fa-camera-retro fa-lg"></i> Our Work
                                        </NavLink>
                                    </NavItem>
                                </div>
                                <div className="px-lg-5 px-md-3 text-nowrap">
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <i class="fa fa-address-card fa-lg"></i> Contact
                                        </NavLink>
                                    </NavItem>
                                </div>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;