import React, { Component } from 'react';
import MainTheme from '../../containers/Theme/MainTheme/MainTheme';
import {Link} from 'react-router-dom';
import './Actor.css';

class Actor extends Component {
    state = {
        actors: [
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' },
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' },
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' },
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' },
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' },
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' },
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' },
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' },
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' },
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' },
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' },
            { name: 'Brad Pitt', count: 21, image: 'brad_pitt.jpg' }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <MainTheme title='Actors' subtitle='All our' searchEnabled={true} />

                <section id="actors">
                    <div className="container">
                        <div className="row mt-5 pt-5 pb-5">
                            {this.state.actors.map((a, index) => {
                                return (
                                    <div className="col-md-2 col-6 mb-4" key={index}>
                                        <div className="inner">
                                            <Link to="#"></Link>
                                            <img src={require('../../assets/images/' + a.image)} alt="" />
                                            <div className="text">
                                                <p className="name">{a.name}</p>
                                                <p className="role_count">Starring movie: {a.count}</p>
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

export default Actor;