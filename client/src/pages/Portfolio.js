import React, { Component } from 'react';
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
    },
    imageContainer: {
        position: 'relative',
        margin: '20px auto 0',
        width: '100%',
        maxWidth: '400px',
        display:'inline-block'
    },
    theImage: {
        display: 'block',
        position: 'relative',
        width: '100%'
    },
    theButton: {
        position: 'absolute',
        left: '0px',
        top: '0px'
    }
};


class Portfolio extends Component {
    render() {
        return (
            <div style={{margin:'3%'}} className="row text-center">
                <div  className="col-lg-4 col-md-12 mb-4">
                    
                    <div>
                        <img src={conchaImg} className="img-fluid mb-4" alt="Conchita"></img>
                            <Link to='/portfolio/yruama'>
                                <button type="submit" className="btn btn-primary">read more</button>
                            </Link>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">

                        <img src={vinylImg} style={styles.image} key='key6' className="img-fluid mb-4" alt="Vinyl"></img>
                        <Link to='/portfolio/hindsvinyl'>
                            <button type="submit" className="btn btn-primary">read more</button>
                        </Link>

                </div>
                <div className="col-lg-4 col-md-6 mb-4">

                        <img src={tamaImg} style={styles.image} key='key' className="img-fluid mb-4" alt="Tama"></img>
                        <Link to='/portfolio/tamagachi'>
                            <button type="submit" className="btn btn-primary">read more</button>
                        </Link>
                </div>

            </div>
        );
    }
}

export default Portfolio;