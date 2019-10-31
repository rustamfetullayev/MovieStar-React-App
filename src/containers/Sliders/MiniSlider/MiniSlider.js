import React, { Component } from 'react';
import Aux from '../../Auxiliary';
import './MiniSlider.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from 'react-router-dom';

class MiniSlider extends Component {
    state = {
        ratedFilms: [
            { name: 'avengers.jpg' },
            { name: 'movie-1.jpg' },
            { name: 'movie-2.jpg' },
            { name: 'movie-3.jpg' },
            { name: 'movie-4.jpg' }
        ]
    }

    render() {
        const carouselProps = {
            loop: true,
            dots: false,
            margin: 30,
            responsiveClass: true,
            autoplay: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            }
        }
        return (
            <Aux>
                <section id="rated_films">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mt-5 mb-5">
                                <div className="header">
                                    <h3>Top Rated Films</h3>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="film_slider">
                                    <OwlCarousel className="owl-theme" {...carouselProps}>
                                        {this.state.ratedFilms.map((f, index) => {
                                            return (
                                                <div className="item" key={index}>
                                                    <div className="main">
                                                        <div className="text">
                                                            <Link to="#">
                                                                <i className="fas fa-play"></i>
                                                            </Link>
                                                            <p>Watch Now</p>
                                                            <p>Released: 7 mar, 2017</p>
                                                        </div>
                                                        <div className="layout"></div>
                                                        <img src={require('../../../assets/images/' + f.name)} alt="" />
                                                    </div>
                                                    <div className="name">
                                                        <h5>Avengers</h5>
                                                    </div>
                                                    <div className="rating">
                                                        <div className="star-ratings-sprite">
                                                            <span style={{ width: '85%' }} className="star-ratings-sprite-rating"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </OwlCarousel>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Aux>
        )
    }
}

export default MiniSlider;