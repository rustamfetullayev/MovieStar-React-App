import React, {Component} from 'react';
import Aux from '../../containers/Auxiliary';
import MainSlider from '../../containers/Sliders/MainSlider/MainSlider';
import MiniSlider from '../../containers/Sliders/MiniSlider/MiniSlider';
import Films from '../../containers/Film/Films/Films';
import TopIMDBFilm from '../../containers/Film/TopIMDBFilm/TopIMDBFilm';

class Home extends Component{
    render(){
        return(
            <Aux>
                <MainSlider />
                <MiniSlider />
                <Films />
                <TopIMDBFilm />
            </Aux>
        )
    }
}

export default Home;