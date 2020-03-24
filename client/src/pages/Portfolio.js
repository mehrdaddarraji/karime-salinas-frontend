import React, { Component } from 'react';
import Radium from 'radium';
import {Link} from "react-router-dom";
import conchaImg from '../img/conchita.jpg';
import vinylImg from '../img/Mockup.jpg';
import tamaImg from '../img/tama_sticker.jpg';

const styles = {
    image: {
        opacity: '1',
        transition: '.5s ease',
    },
    middle: {
        transition: '.5s ease',
        opacity: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        ':hover': {
            opacity: '1'
        }
    },
    buttonMiddle: {
        backgroundColor:'#373B4D', 
        borderColor:'#373B4D',
    },
    container: {
    }
};


class Portfolio extends Component {
    render() {
        return (
            <div style={{margin:'3%'}} className="row text-center">
                <div  className="col-lg-4 col-md-12 mb-4">
                    
                    <div style={styles.container} key='key1'>
                        <img src={conchaImg} style={styles.image} key='key2' className="img-fluid mb-4" alt="Conchita"></img>
                        <div style={styles.middle} key='key3'>
                            <Link to='/contact'>
                                <button formaction="/contact" style={styles.buttonMiddle} key='key4' type="button" className="btn btn-primary">read more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">

                        <img src={vinylImg} style={styles.image} key='key6' className="img-fluid mb-4" alt="Conchita"></img>

                </div>
                <div className="col-lg-4 col-md-6 mb-4">

                        <img src={tamaImg} style={styles.image} key='key' className="img-fluid mb-4" alt="Conchita"></img>
                </div>

            </div>
        );
    }
}

export default Radium(Portfolio);