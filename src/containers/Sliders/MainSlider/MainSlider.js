import React, { Component } from 'react';
import './MainSlider.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class MainSlider extends Component {
    state = {
        images: [
            { name: 'hero-1.jpg' },
            { name: 'hero-2.jpg' },
            { name: 'hero-3.jpg' }
        ]
    }

    render() {
        const carouselProps = {
            loop:true,
            animateIn:'fadeIn',
            animateOut:'fadeOut',
            dots:true,
            responsiveClass:true,
            autoplay:true,
            mouseDrag:false,
            touchDrag:false,
            pullDrag:false,
            autoplayTimeout:5000,
            autoplayHoverPause:false,
            responsive:{
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    loop: true
                }
            }
        }

        return (
            <React.Fragment>
                <section id="main_slider">
                    <OwlCarousel className='owl-theme' {...carouselProps}>
                        {
                            this.state.images.map((f, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="content">
                                            <div className="categories">
                                                <span>Action,</span>
                                                <span>Adventure,</span>
                                                <span>Fantasy</span>
                                            </div>
                                            <h3 className="title">Film</h3>
                                            <h6 className="subtitle">About the Film</h6>
                                            <div className="buttons">
                                                <span>PG</span>
                                                <button className="play">
                                                    <i className="fas fa-play"></i> PLAY TRAILER</button>
                                                <input type="hidden" src="https://www.youtube.com/embed/qktL8MITK48" />
                                            </div>
                                        </div>
                                        <img className="animated fadeIn" src={require('../../../assets/images/' + f.name)} alt="" />
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                    <img className="arrow" src={require('../../../assets/images/scroll-arrow.svg')} alt="" />
                </section>
            </React.Fragment>
        )
    }
}

export default MainSlider;