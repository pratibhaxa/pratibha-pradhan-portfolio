import React, {Component} from "react";
import './HomePage.css';

class HomePage extends Component{
    render(){
        return(
            <div>
                <header className='homepage-navigation-bar'>
                    <table>
                        <tr>
                            <td className='td1'>Full Stack Developer</td>
                            <td className='td2'>About</td>
                            <td className='td3'>Resume</td>

                        </tr>
                    </table>
                </header>
                <h1 style={{fontSize:'30px'}}>
                    HAHHAHAHAHA HELLO 
                </h1>
            </div>
        )
    }
}

export default HomePage;