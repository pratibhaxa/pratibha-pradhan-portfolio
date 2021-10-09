import React, {Component} from "react";
import './ProjectPage.css';
import bg3video from './smoke.mp4'

class ProjectPage extends Component{
    render(){
        return(
            <div>
                PROJECT PAGE
                <video className='background-video1' autoPlay loop muted>
                    <source src={bg3video} type="video/mp4" />
                    <source src={bg3video} type="video/ogg" />
                </video>
            </div>
        )
    }
}

export default ProjectPage;