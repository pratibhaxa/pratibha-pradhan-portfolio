//  /welcome

import React, {Component} from "react";
import './WelcomePage.css';
import bgvideo from './WelcomePageBG-2.mp4';
import { Link } from "react-router-dom";
// import bgvideo from './smoke.mp4';

class WelcomePage extends Component{
    render(){
        return(
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <video className='background-video1' autoPlay loop muted>
                    <source src={bgvideo} type="video/mp4" />
                    <source src={bgvideo} type="video/ogg" />
                </video>
                <div className='container'>
                    <div className='text-area'>
                        <br/>
                        <h3 style={{textAlign:'left'}}> Hello, I'm </h3>
                        <h1> PRATIBHA PRADHAN </h1>
                        {/* enter a welcome image */}
                        <p>Welcome to my Portfolio</p>
                        <br/><br/>
                    </div>
                </div>
                <div className='welcomepage-button-position'>
                    <button type='button' className='welcomepage-button'><Link to="/home" className='welcomepage-link'>WELCOME</Link></button> 
                </div>
            </div>
        )
    }
}

export default WelcomePage;