import React, { Component } from 'react';
import MainTheme from '../../containers/Theme/MainTheme/MainTheme';
import './News.css';
import { NavLink } from 'react-router-dom';

class News extends Component {
    state = {
        news: [
            { image_main: 'film-slide.jpg', mini_images: ['hero-1.jpg', 'film-slide-1.jpg', 'hero-3.jpg', 'hero-news.jpg'] },
            { image_main: 'film-slide.jpg', mini_images: ['hero-1.jpg', 'film-slide-1.jpg', 'hero-3.jpg', 'hero-news.jpg'] },
            { image_main: 'film-slide.jpg', mini_images: ['hero-1.jpg', 'film-slide-1.jpg', 'hero-3.jpg', 'hero-news.jpg'] },
            { image_main: 'film-slide.jpg', mini_images: ['hero-1.jpg', 'film-slide-1.jpg', 'hero-3.jpg', 'hero-news.jpg'] },
            { image_main: 'film-slide.jpg', mini_images: ['hero-1.jpg', 'film-slide-1.jpg', 'hero-3.jpg', 'hero-news.jpg'] }
        ]
    }

    componentDidMount(){
        document.title = 'MovieStar - News';
    }

    render() {
        return (
            <React.Fragment>
                <MainTheme title='Cinema news' subtitle='THE VERY LATEST' />

                <section id="news">
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            {this.state.news.map((n, index) => {
                                return (
                                    <div className="col-md-12 mt-5 d-flex justify-content-center" key={index}>
                                        <div className="row inner">
                                            <div className="col-md-8 d-flex justify-content-center">
                                                <div className="main_img">
                                                    <img src={require('../../assets/images/' + n.image_main)} alt="" />
                                                    <NavLink to="#">
                                                        <div className="layout"></div>
                                                    </NavLink>
                                                    <div className="hover_text">
                                                        <i className="fas fa-link"></i>
                                                        <span>7 Mar, 2017 </span>
                                                        <span>by Lee Grant</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mini_img">
                                                    {n.mini_images.map((m, index) => {
                                                        return (
                                                            <img key={index} src={require('../../assets/images/' + m)} alt="" />
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <div className="text">
                                                    <h4>World War Z</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                                                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default News;