import React, {Component} from 'react';
import Aux from '../../Auxiliary';
import '../Film.css';
import Film from '../Film';

class Films extends Component{
    state= {
        films:[
            {name: 'movie-1.jpg' , vname: 'slide-1-video.png'},
            {name: 'movie-2.jpg' , vname: 'slide-2-video.png'},
            {name: 'movie-3.jpg' , vname: 'slide-3-video.png'},
            {name: 'movie-4.jpg' , vname: 'slide-4-video.png'},
            {name: 'movie-5.jpg' , vname: 'slide-5-video.png'}
        ]
    }

    render(){
        return(
            <Aux>
                <section id="last_5_film">
                    <div className='container'>
                        <div className='row mt-5'>
                            <div className='col-md-12 mb-5'>
                                <div className='header'>
                                    <h3>New Films</h3>
                                </div>
                            </div>
                            {
                                this.state.films.map((f,index) => {
                                    return(
                                        <Film key={index} imgName={f.name} vimgName={f.vname}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </Aux>
        )
    }
}

export default Films;