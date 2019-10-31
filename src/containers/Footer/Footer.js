import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-3 d-flex justify-content-center">
                            <div className="inner">
                                <h6>GET IN TOUCH</h6>
                                <ul>
                                    <li>
                                        <Link to="">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link to="">Give us feedback</Link>
                                    </li>
                                    <li>
                                        <Link to="">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center">
                            <div className="inner">
                                <h6>ABOUT MOVIE STAR</h6>
                                <ul>
                                    <li>
                                        <Link to="">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="">Find us</Link>
                                    </li>
                                    <li>
                                        <Link to="">Schedule</Link>
                                    </li>
                                    <li>
                                        <Link to="">News</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center">
                            <div className="inner">
                                <h6>LEGAL STUFF</h6>
                                <ul>
                                    <li>
                                        <Link to="">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="">Privacy policy</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cookie policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center">
                            <div className="inner">
                                <h6>CONNECT WITH US</h6>
                                <ul>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-facebook-f"></i>Facebook</Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-twitter"></i>Twitter</Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-google-plus-g"></i>Google+</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            <div className="sponsors">
                                <span>2017 © Movie Star /</span>
                                <span>
                                    <Link to="https://www.klevermedia.co.uk/">Web design by Klever media</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;