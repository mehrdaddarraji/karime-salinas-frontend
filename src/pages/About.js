import React, {Component} from 'react';
import logoImg from '../img/logooo.jpg';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center my-4">
                    <h1>About Us</h1>
                </div>
                <div className="row justify-content-center">
                    <h1>&mdash;</h1>
                </div>
                <div className="row justify-content-center mt-4">
                    <img src={logoImg} alt="Kari Sali" height="500" width="500" />
                </div>
                <div className="row justify-content-center mt-4">
                    <h4><em>Karime Salinas</em></h4>
                </div>
            </div>
        );
    }
}

export default About;