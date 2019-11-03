import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../components/Home/Home';
import Contact from '../Contact/Contact';
import Film from '../../components/Film/Film';
import Actor from '../../components/Actor/Actor';
import News from '../../components/News/News';
import SingleFilm from '../../components/Film/SingleFilm/SingleFilm';
import Login from '../../components/Login/Login';
import Personal from '../../components/Personal/Personal';
import Register from '../../components/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
// import Iframe from 'react-iframe';
import { AuthProvider } from '../Auth/Auth';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="preloader">
                    <img src={require('../../assets/images/preloader.svg')} alt="" />
                </div>

                <div id="trailer">
                    {/* <Iframe id="trailer_iframe" url="https://www.youtube.com/embed/Md6Dvxdr0AQ" frameBorder="0" allowFullScreen="allowfullscreen" /> */}
                </div>

                <Header />
                <AuthProvider>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/films" exact component={Film} />
                        <Route path="/films/:id" exact component={SingleFilm} />
                        <Route path="/actors" exact component={Actor} />
                        <Route path="/news" exact component={News} />
                        <Route path="/login" exact component={Login} />
                        <PrivateRoute path="/personal" exact component={Personal} />
                        <Route path="/register" exact component={Register} />
                        <Route render={() => { return (<h1>Not Found</h1>) }} />
                    </Switch>
                </AuthProvider>

                <Contact />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;