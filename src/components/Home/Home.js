import React, {Component} from 'react';
import MainSlider from '../../containers/Sliders/MainSlider/MainSlider';
import MiniSlider from '../../containers/Sliders/MiniSlider/MiniSlider';
import Films from '../../containers/Film/Films/Films';
import TopIMDBFilm from '../../containers/Film/TopIMDBFilm/TopIMDBFilm';

class Home extends Component{
    componentDidMount(){
        document.title = 'MovieStar - Home';
    }

    render(){
        return(
            <React.Fragment>
                <MainSlider />
                <MiniSlider />
                <Films />
                <TopIMDBFilm />
            </React.Fragment>
        )
    }
}

export default Home;