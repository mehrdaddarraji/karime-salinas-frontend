import React, {Component} from 'react';
import conchitaImg from '../img/conchita.jpg';
import mockupImg from '../img/Mockup.jpg';
import tamaStickerImg from '../img/tama_sticker.jpg';

class LandingPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <img className="img-fluid" src={conchitaImg} alt="conchita" />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <img className="img-fluid" src={mockupImg} alt="mockup" />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <img className="img-fluid" src={tamaStickerImg} alt="tama sticker" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;