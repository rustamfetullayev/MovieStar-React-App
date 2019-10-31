import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './TopIMDBFilm.css';

class TopIMDBFilm extends Component {
    render() {
        return (
            <section id="top_imdb">
                <img src={require('../../../assets/images/slide-7.png')} className="cover_img" alt="" />
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-12 mb-5">
                            <div className="header">
                                <h3>IMDB Top Rated Film</h3>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5 mb-md-5 pb-md-5">
                            <div className="about">
                                <span className="genre">
                                    <Link to="#">Drama,</Link>
                                    <Link to="#">Thriller</Link>
                                </span>
                                <h4 className="name">Deepwater Horizon</h4>
                                <div className="rating">
                                    <div className="star-ratings-sprite">
                                        <span style={{width: '95%'}} className="star-ratings-sprite-rating"></span>
                                    </div>
                                </div>
                                <div className="date">
                                    <i className="fas fa-calendar-week"></i>
                                    30 September, 2017
                                </div>
                                <p className="about_film">
                                    A dramatization of the April 2010 disaster, when the offshore drilling rig Deepwater Horizon exploded and created the worst
                                    oil spill in U.S. history.
                                </p>
                                <Link to="#" className="more">More Info</Link>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5 mb-md-5 pb-5">
                            <div className="link_video">
                                <Link to="#">
                                    <img src={require('../../../assets/images/slide-7-video.png')} alt="" />
                                    <span className="play"></span>
                                    <span className="drop1"></span>
                                    <span className="drop2"></span>
                                    <span className="drop3"></span>
                                    <span className="drop4"></span>
                                    <span className="length">1:16:10</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default TopIMDBFilm;