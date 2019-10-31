import React, { Component } from 'react';
import './FilmTheme.css';

class FilmTheme extends Component {
    render() {
        return (
            <section id="selected_film">
                <img src={require('../../../assets/images/film-slide-1.jpg')} alt="" className="back_img" />
                <div className="content">
                    <div className="categories">
                        <span>Action,</span>
                        <span>Adventure,</span>
                        <span>Fantasy,</span>
                        <span>Scary</span>
                    </div>
                    <h3 className="title">World War Z</h3>
                    <h6 className="subtitle">Humans and zombies are at war, Gerry Lane is gone. The key to saving our future lies buried in the secrets of
                            the past, in the hidden history.</h6>
                    <div className="buttons">
                        <span>PG</span>
                        <button className="play"><i className="fas fa-play"></i> PLAY TRAILER</button>
                    </div>
                    <div className="rating">
                        <div className="star-ratings-sprite">
                            <span style={{ width: '97%' }} className="star-ratings-sprite-rating"></span>
                        </div>
                    </div>
                </div>
                <img className="arrow" src={require('../../../assets/images/scroll-arrow.svg')} alt="" />
            </section>
        )
    }
}

export default FilmTheme;