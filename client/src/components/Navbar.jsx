import React, {Component} from 'react';
import logoImg from '../img/logooo.jpg';

class Navbar extends Component {
    render() {
        const path = this.props.history.location.pathname;

        return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                            {/* <img className="navbar-brand mr-5" src={logoImg} height="150" width="150" alt="Kari Sali Designs" /> */}
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item px-4">
                                    <img className="navbar-brand" src={logoImg} height="150" width="150" alt="Kari Sali Designs" />
                                </li>
                                <li className={`nav-item px-4 ${path === "/" ? 'active' : ''}`}>
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                {/* <li className="nav-item px-4">
                                    <a className="nav-link" href="/about">About</a>
                                </li> */}
                                <li className={`nav-item px-4 ${path === "/portfolio" ? 'active' : ''}`}>
                                    <a className="nav-link" href="/portfolio">Portfolio</a>
                                </li>
                                <li className={`nav-item px-4 ${path === "/contact" ? 'active' : ''}`}>
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
			</div>
        );
    }
}

export default Navbar;
