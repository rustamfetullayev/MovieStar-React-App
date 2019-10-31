import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Aux from '../Auxiliary';
import './Header.css';

class Header extends Component {
    state = {
        links: [
            { name: 'Home', url: '/' },
            { name: 'Films', url: '/films' },
            { name: 'Actors', url: '/actors' },
            { name: 'News', url: '/news' },
        ]
    }

    render() {
        return (
            <Aux>
                <section id="heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-end">
                                <div className="contact">
                                    <span>
                                        <i className="fas fa-sign-in-alt"></i>
                                        <Link to="#">Login</Link>
                                    </span>
                                    <span>
                                        <i className="fas fa-user-alt"></i>
                                        <Link to="#">Sign up</Link>
                                    </span>
                                    <span>
                                        <i className="fas fa-phone"></i>
                                        <Link to="tel:+9940558224815">055-822-48-15</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-10">
                                <Link to="#">
                                    <img className="icon" src={require('../../assets/images/logo.svg')} alt="" />
                                </Link>
                            </div>
                            <div className="col-md-9 col-2 d-flex justify-content-end">
                                <div className="hidden_nav_icon">
                                    <i className="fas fa-bars"></i>
                                </div>
                                <nav>
                                    <ul className="main_nav">
                                        {this.state.links.map((l, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink className="main_nav_item" to={l.url}>{l.name}</NavLink>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-12 pt-3">
                                <div className="hidden_main_nav">
                                    <ul>
                                        {this.state.links.map((l, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink className="hidden_nav_item" to={l.url}>{l.name}</NavLink>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="scroll_nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-10">
                                <Link to="/">
                                    <img className="icon" src={require('../../assets/images/logo.svg')} alt="" />
                                </Link>
                            </div>
                            <div className="col-md-9 col-2 d-flex justify-content-end">
                                <div className="hidden_nav_icon">
                                    <i className="fas fa-bars"></i>
                                </div>
                                <nav>
                                    <ul className="main_nav">
                                        {this.state.links.map((l, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink className="main_nav_item" to={l.url}>{l.name}</NavLink>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-12 pt-3">
                                <div className="hidden_main_nav">
                                    <ul>
                                        {this.state.links.map((l, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink className="hidden_nav_item" to={l.url}>{l.url}</NavLink>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Aux>
        )
    }
}

export default Header;