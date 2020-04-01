import React, {Component} from 'react';
import logoImg from '../img/logooo.jpg';

class Footer extends Component {
    render() {
        return (
            
            <div>
                <footer className="page-footer font-small blue">

                    <div className="container-fluid text-center text-md-left">

                        <div className="row justify-content-center text-center py-5" style={{display:'flex', alignItems:'center'}}>
                            <hr className="clearfix w-100 d-md-none"></hr>

                            <div style={{ textAlign:'end'}}>
                                <img className="navbar-brand" src={logoImg} height="150" width="150" alt="Kari Sali Designs" />

                            </div>
                            <div className="col-md-3" aria-controls="navbarText" aria-expanded="false">

                                <p style={{ color:'gray', fontSize:'16px', margin:'0', padding:'0'}}>Contact</p>
                                <hr style={{width: '90px', borderColor:'gray', margin:'0', padding:'0'}} className="mb-4 d-inline-block"></hr>

                                <ul style={{ color:'gray'}}className="list-unstyled">
                                    <li>
                                        <a style={{color:'#373B4D'}} href="/contact">karisalinas113@gmail.com</a>
                                    </li>
                                </ul>

                            </div>

                            <div className="col-md-3">

                                <p style={{ color:'gray', fontSize:'16px', margin:'0', padding:'0'}}>Social</p>
                                <hr style={{width: '90px', borderColor:'gray', margin:'0', padding:'0'}} className="mb-4  d-inline-block"></hr>

                                <div className="row pb-3">
                                    <div className="col-md-12">
                                        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-evenly'}}>
                                            <a href="https://www.instagram.com/karidesigns3/"><div className="fab fa-instagram" style={{color:'#373B4D'}}></div></a>
                                            <a href="https://www.linkedin.com/in/karime-salinas-b9098616b/"><div className="fab fa-linkedin-in" style={{color:'#373B4D'}}></div></a>
                                            <a href="https://www.behance.net/karimesalinas"><div className="fab fa-behance" style={{color:'#373B4D'}}></div></a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;
