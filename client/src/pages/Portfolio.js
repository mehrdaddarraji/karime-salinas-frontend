import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Radium from 'radium';
import conchaImg from '../img/conchita.jpg';
import vinylImg from '../img/Mockup.jpg';
import tamaImg from '../img/tamagotchi_sticker.jpg';

const styles = {
    image: {
        transition: '.5s ease',
        ':hover': {
            opacity: '0.6',
        },
    }
};


class Portfolio extends Component {
    render() {
        return (
            <div style={{margin:'3%'}} className="row text-center container">
                <div className="col-lg-4 col-md-12 mb-4">
                    <Link to='/portfolio/yruama'>
                        <img style= {styles.image} key='key1' src={conchaImg} className="img-fluid mb-4" alt="Conchita"></img>
                    </Link>
                    <p style={{color:'gray'}}>Yruama T-Shirt Design</p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <Link to='/portfolio/hindsvinyl'>
                        <img style= {styles.image} key='key2' src={vinylImg} className="img-fluid mb-4" alt="Vinyl"></img>
                    </Link>
                    <p style={{color:'gray'}}>Hinds Vinyl Cover Design</p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <Link to='/portfolio/tamagochi'>
                        <img style= {styles.image} key='key3' src={tamaImg} className="img-fluid mb-4" alt="Tama"></img>
                    </Link>
                    <p style={{color:'gray'}}>Tamagotchi Sticker Design</p>
                </div>

            </div>
        );
    }
}

export default Radium(Portfolio);