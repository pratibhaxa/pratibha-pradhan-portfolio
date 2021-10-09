import React, {Component} from "react";
import './WelcomePage2.css';
import bg3 from './WelcomePage-4.png';
import { Link } from "react-router-dom";

class WelcomePage2 extends Component{
    render(){
        return(
            <div>  {/*style={{backgroundImage:{bg3}}}*/}
                {/* <header className='homepage-navigation-bar'>
                    <table>
                        <tr>
                            <td className='td1'>Full Stack Developer</td>
                            <td className='td2'>About</td>
                            <td className='td3'></td>
                        </tr>
                    </table>
                </header> */}
                <div className='container2'>
                    <div className='text-area2'>
                        <br/>
                        <h1> Full Stack Developer </h1>
                        {/* enter a welcome image */}
                        <br/><br/>
                    </div>
                </div>
                <div className='container3'>
                    <div className='text-area3'>
                        <br/>
                        <h1> Pratibha Pradhan </h1>
                        {/* enter a welcome image */}
                        <p> Associate Software Engineer </p>

                        <br/><br/><br/>
                    </div>
                    <div className='welcomepage-button-position2'>
                        <button type='button' className='welcomepage-button2'><Link to="/home" className='welcomepage-link2'>WELCOME</Link></button> 
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage2;