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

                                <h5 className="text-uppercase" style={{ color:'gray'}}>Contact</h5>
                                <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', background:'gray'}}></hr>

                                <ul style={{ color:'gray'}}className="list-unstyled">
                                    <li>
                                        <a href="/contact">example@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="/contact">+1 (956) 123 4567</a>
                                    </li>
                                </ul>

                            </div>

                            <div className="col-md-3">

                                <h5 className="text-uppercase" style={{ color:'gray'}}>Social</h5>
                                <hr style={{width: '60px', background:'gray'}} className="accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>

                                <div className="row pb-3">
                                    <div className="col-md-12">

                                        <div className="mb-5 flex-center">
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
