import React, {Component} from 'react';
import headshotImg from '../img/headshot.jpg';
import desginImg from '../img/design icon.jpg';
import logosImg from '../img/logos icon.jpg';
import illustrationsImg from '../img/illustrations icon.jpg';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="container text-secondary">
                    <div className="row justify-content-center mt-4">
                        <img className="rounded-circle" src={headshotImg} alt="Kari Sali" height="30%" width="30%" />
                    </div>
                    <div className="row justify-content-center mt-2">
                        <h4><em>Karime Salinas</em></h4>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <b></b>
                        <h1>
                            <a style={{ color: 'gray' }} href="https://www.linkedin.com/in/karime-salinas-b9098616b/">
                                <div className="fab fa-linkedin-in"></div>
                            </a>
                        </h1>
                    </div>
                    <div className="row justify-content-center mt-2" style={{ paddingRight:"10%", paddingLeft: "10%"}}>
                        <p>My name is Karime Salinas and I enjoy blending my love for drawing and graphic design by creating
                           digital illustrations that are fun and enjoyable. Visual communication is a skill that I like to 
                           embrace and use in my work to show my voice as a designer!</p>
                    </div>
                </div>
                <div className="container my-5 text-secondary">
                    <br></br>
                    <div className="row justify-content-center">
                        <h1>Services</h1>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col">
                            <div className="card border-0" style={{width: "18rem"}}>
                                <img className="card-img-top rounded-circle" src={desginImg} alt="Card designs" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Designs</h5>
                                    <hr className="accent-2" style={{width: '60px', background:'gray'}}></hr>
                                    <p className="card-text text-center">I provide graphic design services by developing the layout and production
                                    of concepts such as poster design, brochures, business cards, and stationary.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0" style={{width: "18rem"}}>
                                <img className="card-img-top rounded-circle" src={logosImg} alt="Card logos" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Logos</h5>
                                    <hr className="accent-2" style={{width: '60px', background:'gray'}}></hr>
                                    <p className="card-text text-center">I follow my clients through the logo making process of brainstorming, sketching,
                                     and creating. It is my goal to create a distinctive logo that will represent what my client’s company or project is about.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0" style={{width: "18rem"}}>
                                <img className="card-img-top rounded-circle" src={illustrationsImg} alt="Card t-shirts" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Illustrations</h5>
                                    <hr className="accent-2" style={{width: '60px', background:'gray'}}></hr>
                                    <p className="card-text text-center">I can create custom digital illustrations for projects that will follow the project’s
                                     brand identity. This can be done through forms such as prints, gifs, and stickers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;