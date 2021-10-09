import React, {Component} from "react";
import './AboutPage.css';
import bg2video from './smoke.mp4';

class AboutPage extends Component{
    render(){
        return(
            <div>
                ABOUT PAGE
                <video className='background-video1' autoPlay loop muted>
                    <source src={bg2video} type="video/mp4" />
                    <source src={bg2video} type="video/ogg" />
                </video>
            </div>
        )
    }
}

export default AboutPage;