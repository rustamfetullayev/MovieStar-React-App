import React, { Component } from 'react';
import './MainTheme.css';

class MainTheme extends Component {
    render() {
        return (
            <section id="main_theme">
                <img src={require('../../../assets/images/film-slide-1.jpg')} alt="" className="back_img" />
                <div className="text">
                    <p>{this.props.subtitle}</p>
                    <h3>{this.props.title}</h3>
                </div>
                {
                    this.props.searchEnabled === true ?
                        <div className="search">
                            <input type="text" placeholder="Type to search" id="search" name="text" className="form-control" />
                            <button type="submit" className="fas fa-search"></button>
                        </div>
                    :
                    <img className="arrow" src={require('../../../assets/images/scroll-arrow.svg')} alt=""></img>
                }
            </section>
        )
    }
}

export default MainTheme;