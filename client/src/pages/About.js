import React, {Component} from 'react';
import logoImg from '../img/logooo.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <div className="container text-secondary">
                    <div className="row justify-content-center my-4">
                        <h1>About Us</h1>
                    </div>
                    <div className="row justify-content-center">
                        <h1>&mdash;</h1>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <img src={logoImg} alt="Kari Sali" height="500" width="500" />
                    </div>
                    <div className="row justify-content-center mt-2">
                        <h4><em>Karime Salinas</em></h4>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <h1><b>in</b></h1>
                    </div>
                    <div className="row justify-content-center mt-2" style={{ paddingRight:"10%", paddingLeft: "10%"}}>
                        <p>My name is Karime Salinas and I enjoy blending my love for drawing and graphic design by creating
                           digital illustrations that are fun and enjoyable. Visual communication is a skill that I like to 
                           embrace and use in my work to show my voice as a designer</p>
                    </div>
                </div>
                <div className="container my-5 text-secondary">
                    <br></br>
                    <div className="row justify-content-center">
                        <h1>SERVICES</h1>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col">
                            <div className="card border-0" style={{width: "18rem"}}>
                                <img className="card-img-top rounded-circle" src={logoImg} alt="Card designs" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Designs</h5>
                                    <h5 className="text-center">&mdash;&mdash;&mdash;</h5>
                                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0" style={{width: "18rem"}}>
                                <img className="card-img-top rounded-circle" src={logoImg} alt="Card logos" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Logos</h5>
                                    <h5 className="text-center">&mdash;&mdash;&mdash;</h5>
                                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0" style={{width: "18rem"}}>
                                <img className="card-img-top rounded-circle" src={logoImg} alt="Card t-shirts" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">T-Shirts</h5>
                                    <h5 className="text-center">&mdash;&mdash;&mdash;</h5>
                                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default About;
