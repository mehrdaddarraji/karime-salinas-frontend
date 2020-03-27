import React, {Component} from 'react';
import logoImg from '../img/logooo.jpg';

class Footer extends Component {
    render() {
        return (
            
            <div>
                <footer className="page-footer font-small blue pt-4">

                    <div className="container-fluid text-center text-md-left">

                        <div className="row justify-content-center text-center py-5">

                            <div style={{ textAlign:'end'}}>
                                <img className="navbar-brand mr-5" src={logoImg} height="150" width="150" alt="Kari Sali Designs" />

                            </div>

                            <hr className="clearfix w-100 d-md-none pb-3"></hr>

                            <div className="col-md-3" aria-controls="navbarText" aria-expanded="false">

                                <p style={{ color:'gray', fontSize:'16px', margin:'0', padding:'0'}}>Contact</p>
                                <hr style={{width: '90px', borderColor:'gray', margin:'0', padding:'0'}} className="mb-4 d-inline-block"></hr>

                                <ul style={{ color:'gray'}}className="list-unstyled">
                                    <li>
                                        <a style={{color:'#373B4D'}} href="/contact">example@gmail.com</a>
                                    </li>
                                    <li>
                                        <a style={{color:'#373B4D'}} href="/contact">+1 (956) 123 4567</a>
                                    </li>
                                </ul>

                            </div>

                            <div className="col-md-3">

                                <p style={{ color:'gray', fontSize:'16px', margin:'0', padding:'0'}}>Social</p>
                                <hr style={{width: '90px', borderColor:'gray', margin:'0', padding:'0'}} className="mb-4  d-inline-block"></hr>

                                <div className="row pb-3">
                                    <div className="col-md-12">
                                        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-evenly'}}>
                                            <a href="https://www.google.com"><a className="fab fa-instagram" style={{color:'#373B4D'}}></a></a>
                                            <a href="https://www.google.com"><a className="fab fa-linkedin-in" style={{color:'#373B4D'}}></a></a>
                                            <a href="https://www.google.com"><a className="fab fa-google" style={{color:'#373B4D'}}></a></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                    </div>

                </footer>
            </div>
        );
    }
}
export default Footer;
