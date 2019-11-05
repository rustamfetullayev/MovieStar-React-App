import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import base from '../Base/Base';
import './Header.css';

const Header = () => {
    const [linkState] = useState({
        links: [
            { name: 'Home', url: '/' },
            { name: 'Films', url: '/films' },
            { name: 'Actors', url: '/actors' },
            { name: 'News', url: '/news' }
        ]
    })

    const [userState, setuserState] = useState({
        currentUser: null
    })

    useEffect(() => {
        base.auth().onAuthStateChanged(() => {
            setuserState({
                currentUser: base.auth().currentUser
            });
        })
    },[])

    let comp = (
        <React.Fragment>
            <span>
                <i className="fas fa-sign-in-alt"></i>
                <Link to="/login">Login</Link>
            </span>
            <span>
                <i className="fas fa-user-alt"></i>
                <Link to="/register">Sign up</Link>
            </span>
        </React.Fragment>
    )

    if (userState.currentUser) {
        comp = (
            <React.Fragment>
                <span>
                    <i className="fas fa-sign-out-alt"></i>
                    <NavLink to='/logout' onClick={(event) => {
                        event.preventDefault();
                        base.auth().signOut()
                    }}>Log out</NavLink>
                </span>
                <span>
                    <i className="fas fa-user-circle"></i>
                    <NavLink to="/personal">{userState.currentUser.email}</NavLink>
                </span>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <section id="heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-end">
                            <div className="contact">
                                {comp}
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
                                    {linkState.links.map((l, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink className="main_nav_item" exact={l.url === '/'} to={l.url}>{l.name}</NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-12 pt-3">
                            <div className="hidden_main_nav">
                                <ul>
                                    {linkState.links.map((l, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink className="hidden_nav_item" exact={l.url === '/'} to={l.url}>{l.name}</NavLink>
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
                                    {linkState.links.map((l, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink className="main_nav_item" exact={l.url === '/'} to={l.url}>{l.name}</NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-12 pt-3">
                            <div className="hidden_main_nav">
                                <ul>
                                    {linkState.links.map((l, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink className="hidden_nav_item" exact={l.url === '/'} to={l.url}>{l.name}</NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Header;