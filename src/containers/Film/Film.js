import React, { Component } from 'react';
import Aux from '../Auxiliary';
import {NavLink} from 'react-router-dom';
import './Film.css';

class Film extends Component {
    render() {
        return (
            <Aux>
                <div className="col-md-12 mb-5">
                    <div className="name">
                        <h4>Avengers</h4>
                    </div>
                    <div className="inner">
                        <div className="link_image">
                            <NavLink to={'/films/' + this.props.index}>
                                <img src={require('../../assets/images/' + this.props.imgName)} alt="" />
                                <span className="dublaj" style={{backgroundColor: 'rgb(138, 0, 0)'}}>Türkçe</span>
                            </NavLink>
                        </div>
                        <div className="link_video">
                            <NavLink to={'/films/' + this.props.index}>
                                <img src={require('../../assets/images/' + this.props.vimgName)} alt="" />
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
            </Aux>
        )
    }
}

export default Film;