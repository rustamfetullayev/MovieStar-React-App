import React, { Component } from 'react';
import Aux from '../../../containers/Auxiliary';
import { Link } from 'react-router-dom';
import FilmTheme from '../../../containers/Theme/FilmTheme/FilmTheme';
import Comment from '../../../containers/Comment/Comment';
import './SingleFilm.css';
import Iframe from 'react-iframe';

class SingleFilm extends Component {
    render() {
        return (
            <Aux>
                <FilmTheme />

                <section id="film">
                    <div className="container">
                        <div className="row mt-5 pt-5">
                            <div className="col-md-12 mb-5">
                                <div className="header">
                                    <h3>SYNOPSIS</h3>
                                </div>
                            </div>
                            <div className="col-md-3 mb-5">
                                <div className="link_image">
                                    <Link to="#">
                                        <img src={require('../../../assets/images/film-slide-1.jpg')} alt="" />
                                        <span className="dublaj" style={{ backgroundColor: 'rgb(138, 0, 0)' }}>Türkçe</span>
                                    </Link>
                                </div>
                                <div className="networks">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-pinterest"></i>
                                    <i className="fab fa-google-plus-g"></i>
                                </div>
                            </div>
                            <div className="col-md-9 mb-5">
                                <div className="about">
                                    <h3 className="title">Description</h3>
                                    <p className="subtitle">Former United Nations employee Gerry Lane traverses the world in a race against time to stop the
                                        Zombie pandemic that is toppling armies and governments, and threatening to destroy humanity
                                        itself.
                                    </p>
                                    <dl>
                                        <dt>Year</dt>
                                        <dd>2014</dd>
                                        <dt>IMDB</dt>
                                        <dd>9.7</dd>
                                        <dt>Country</dt>
                                        <dd>
                                            <Link to="">USA</Link>
                                        </dd>
                                        <dt>Genre</dt>
                                        <dd>
                                            <Link to="">ACTION,</Link>
                                            <Link to="">ADVENTURE,</Link>
                                            <Link to="">SCARY,</Link>
                                            <Link to="">FANTASY</Link>
                                        </dd>
                                        <dt>Category</dt>
                                        <dd>
                                            <Link to="">Foreign cinema</Link>
                                        </dd>
                                        <dt>Length</dt>
                                        <dd>1:24:09</dd>
                                        <dt>Translation</dt>
                                        <dd>
                                            <Link to="">Türkçe</Link>
                                        </dd>
                                        <dt>Starring</dt>
                                        <dd>
                                            <Link to="">Brad Pitt,</Link>
                                            <Link to="">Mireille Enos,</Link>
                                            <Link to="">Daniella Kertesz,</Link>
                                            <Link to="">James Badge Dale,</Link>
                                            <Link to="">Ludi Boeken,</Link>
                                            <Link to="">Matthew Fox,</Link>
                                            <Link to="">Fana Mokoena,</Link>
                                            <Link to="">David Morse,</Link>
                                            <Link to="">Elyes Gabel</Link>
                                            and also...
                                    </dd>
                                    </dl>
                                    <div className="like_dislike_buttons">
                                        <button className="like_post active">
                                            508
                                        <i className="far fa-thumbs-up"></i>
                                        </button>
                                        <button className="dislike_post">
                                            32
                                        <i className="far fa-thumbs-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="film_iframe">
                    <img src={require('../../../assets/images/film-slide.jpg')} alt="" className="cover_img" />
                    <Iframe url="http://video.az/embed/movie/3864" frameBorder="0" allowFullScreen="allowfullscreen" />
                </section>

                <Comment />
            </Aux>
        )
    }
}

export default SingleFilm;