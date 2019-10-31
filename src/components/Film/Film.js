import React, { Component } from 'react';
import MainTheme from '../../containers/Theme/MainTheme/MainTheme';
import FilmComponent from '../../containers/Film/Film';
import Aux from '../../containers/Auxiliary';
import {Link} from 'react-router-dom';
import './Film.css';

class Film extends Component {
    state = {
        films: [
            { name: 'movie-1.jpg', vname: 'slide-1-video.png' },
            { name: 'movie-2.jpg', vname: 'slide-2-video.png' },
            { name: 'movie-3.jpg', vname: 'slide-3-video.png' },
            { name: 'movie-4.jpg', vname: 'slide-4-video.png' },
            { name: 'movie-5.jpg', vname: 'slide-5-video.png' }
        ],
        selects: [
            { name: 'Select Genre', items: [{ name: 'XXX', url: '#' },{ name: 'XXX', url: '#' },{ name: 'XXX', url: '#' }] },
            { name: 'Select Dublaj', items: [{ name: 'XXX', url: '#' },{ name: 'XXX', url: '#' },{ name: 'XXX', url: '#' }] },
            { name: 'Select Country', items: [{ name: 'XXX', url: '#' },{ name: 'XXX', url: '#' },{ name: 'XXX', url: '#' }] },
            { name: 'Select Category', items: [{ name: 'XXX', url: '#' },{ name: 'XXX', url: '#' },{ name: 'XXX', url: '#' }] }
        ]
    }
    render() {
        return (
            <Aux>
                <MainTheme title='Films' subtitle='The very latest' searchEnabled={true} />

                <section id="films">
                    <div className="container">
                        <div className="row selections">
                            {this.state.selects.map((s, index) => {
                                return (
                                    <div className="col-md-3 d-flex justify-content-center mt-5" key={index}>
                                        <div className="select_list">
                                            <button>{s.name}
                                                <div className="dropdown_arrow"></div>
                                                <div className="clone_down"></div>
                                                <div className="clone_up"></div>
                                            </button>
                                            <ul className="dropdown_select_list">
                                                {s.items.map((i, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link to={i.url}>{i.name}</Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='films mt-5'>
                            {this.state.films.map((f,index) => {
                                return(
                                    <FilmComponent key={index} imgName={f.name} vimgName={f.vname} index={index} />
                                )
                            })}
                        </div>
                    </div>
                </section>
            </Aux>
        )
    }
}

export default Film;