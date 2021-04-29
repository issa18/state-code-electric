import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcPaypal } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/gallery'>Our Work</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                            <li><Link to='/schedule'>Schedule Appointment</Link></li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Business Hours</h5>
                        <ul className="list-unstyled">
                            <li>Mon: 8am-5pm</li>
                            <li>Tues: 8am-5pm</li>
                            <li>Weds: 8am-5pm</li>
                            <li>Thurs: 8am-5pm</li>
                            <li>Fri: 8am-5pm</li>
                            <li>Sat & Sun: Closed</li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Connect With Us</h5>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Payment Methods</h5>
                        <ul>
                            <li>
                                <FaCcVisa />
                            </li>
                            <li>
                                <FaCcMastercard />
                            </li>
                            <li>
                                <FaCcDiscover />
                            </li>
                            <li>
                                <FaCcPaypal />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;