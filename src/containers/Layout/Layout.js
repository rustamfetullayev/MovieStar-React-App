import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Layout.css';
import Aux from '../Auxiliary';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../components/Home/Home';
import Contact from '../Contact/Contact';
import Film from '../../components/Film/Film';
import Actor from '../../components/Actor/Actor';
import News from '../../components/News/News';
import SingleFilm from '../../components/Film/SingleFilm/SingleFilm';
import Iframe from 'react-iframe';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <div id="preloader">
                    <img src={require('../../assets/images/preloader.svg')} alt="" />
                </div>

                <div id="trailer">
                    <Iframe id="trailer_iframe" url="https://www.youtube.com/embed/Md6Dvxdr0AQ" frameBorder="0" allowFullScreen="allowfullscreen" />
                </div>

                <Header />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/films" exact component={Film} />
                    <Route path="/films/:id" exact component={SingleFilm} />
                    <Route path="/actors" exact component={Actor} />
                    <Route path="/news" exact component={News} />
                </Switch>

                <Contact />
                <Footer />
            </Aux>
        )
    }
}

export default Layout;