import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './Layout.css';
import Aux from '../Auxiliary';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../components/Home/Home';
import Contact from '../Contact/Contact';
import Film from '../../components/Film/Film';
import Actor from '../../components/Actor/Actor';
import News from '../../components/News/News';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <div id="preloader">
                    <img src={require('../../assets/images/preloader.svg')} alt="" />
                </div>

                <Header />

                <Route path="/" exact component={Home} />
                <Route path="/films" component={Film} />
                <Route path="/actors" component={Actor} />
                <Route path="/news" component={News} />

                <Contact />
                <Footer />
            </Aux>
        )
    }
}

export default Layout;