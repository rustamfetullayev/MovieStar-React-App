import React, {useEffect,useContext} from 'react';
import './Personal.css';
import MainTheme from '../../containers/Theme/MainTheme/MainTheme';
import { NavLink } from 'react-router-dom';
import base from '../../containers/Base/Base';
import {AuthContext} from '../../containers/Auth/Auth';

const Personal = () => {

    const {currentUser} = useContext(AuthContext);

    useEffect(() => {
        document.title = 'MovieStar - Personal';
    }, [])

    return (
        <React.Fragment>
            <MainTheme title='Welcome' subtitle={'Rustam Fetullayev'} />

            <section id="personal">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-md-12">
                            <div className="inner row">
                                <div className="col-md-4 d-flex justify-content-center">
                                    <div className="image">
                                        <img className="usr_img" src={require('../../assets/images/usr_img.jpeg')} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="info">
                                        <span className="username">{currentUser.email}</span>
                                        <NavLink to="#" className="edit">Edit Profile</NavLink>
                                        <NavLink to='/logout' onClick={(event) => {
                                            event.preventDefault();
                                            base.auth().signOut()
                                        }}>
                                            <i className="fas fa-power-off"></i>
                                        </NavLink>
                                        <p className="usr_activity">
                                            <span>
                                                <b>8</b> likes</span>
                                            <span>
                                                <b>12</b> saves</span>
                                        </p>
                                        <p className="usr_fullname">Rustam Fetullayev</p>
                                        <p className="usr_bio">what doesn't kill me makes me stronger</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="posts">
                                <nav>
                                    <ul>
                                        <li id="liked" className="active">Liked</li>
                                        <li id="saved">Saved</li>
                                    </ul>
                                </nav>
                                <div className="screen">
                                    <div className="liked row selected">
                                        <div className="col-md-12 mb-5">
                                            <div className="name">
                                                <h4>Avengers</h4>
                                            </div>
                                            <div className="inner">
                                                <div className="link_image">
                                                    <NavLink to="#">
                                                        <img src={require('../../assets/images/film-slide-1.jpg')} alt="" />
                                                        <span className="dublaj" style={{ backgroundColor: 'rgb(138, 0, 0)' }}>Türkçe</span>
                                                    </NavLink>
                                                </div>
                                                <div className="link_video">
                                                    <NavLink to="#">
                                                        <img src={require('../../assets/images/film-slide.jpg')} alt="" />
                                                        <span className="play"></span>
                                                        <span className="layout"></span>
                                                        <span className="length">1:16:10</span>
                                                    </NavLink>
                                                </div>
                                                <div className="about">
                                                    <dl>
                                                        <dt>Year</dt>
                                                        <dd>2014</dd>
                                                        <dt>IMDB</dt>
                                                        <dd>8.2</dd>
                                                        <dt>Country</dt>
                                                        <dd>
                                                            <NavLink to="">USA</NavLink>
                                                        </dd>
                                                        <dt>Genre</dt>
                                                        <dd>
                                                            <NavLink to="">Thriller,</NavLink>
                                                            <NavLink to="">Adventure,</NavLink>
                                                            <NavLink to="">Comics</NavLink>
                                                        </dd>
                                                        <dt>Views</dt>
                                                        <dd>
                                                            <i className="fas fa-eye"></i>12345</dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="saved row">
                                        <div className="col-md-12 mb-5">
                                            <div className="name">
                                                <h4>Avengers</h4>
                                            </div>
                                            <div className="inner">
                                                <div className="link_image">
                                                    <NavLink to="#">
                                                        <img src={require('../../assets/images/film-slide-1.jpg')} alt="" />
                                                        <span className="dublaj" style={{ backgroundColor: 'rgb(138, 0, 0)' }}>Türkçe</span>
                                                    </NavLink>
                                                </div>
                                                <div className="link_video">
                                                    <NavLink to="#">
                                                        <img src={require('../../assets/images/film-slide.jpg')} alt="" />
                                                        <span className="play"></span>
                                                        <span className="layout"></span>
                                                        <span className="length">1:16:10</span>
                                                    </NavLink>
                                                </div>
                                                <div className="about">
                                                    <dl>
                                                        <dt>Year</dt>
                                                        <dd>2014</dd>
                                                        <dt>IMDB</dt>
                                                        <dd>8.2</dd>
                                                        <dt>Country</dt>
                                                        <dd>
                                                            <NavLink to="">USA</NavLink>
                                                        </dd>
                                                        <dt>Genre</dt>
                                                        <dd>
                                                            <NavLink to="">Thriller,</NavLink>
                                                            <NavLink to="">Adventure,</NavLink>
                                                            <NavLink to="">Comics</NavLink>
                                                        </dd>
                                                        <dt>Views</dt>
                                                        <dd>
                                                            <i className="fas fa-eye"></i>12345</dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Personal;