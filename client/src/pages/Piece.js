import React, {Component} from 'react';

// yruama images
import conchaMain from '../img/conchita.jpg';
import conchaShirt from '../img/tshirtconchita.jpg';
import conchaMockup from '../img/concha_mockup.jpg';

// hinds images
import hindsMain from '../img/Mockup.jpg';
import hindsCover from '../img/vinylcover.jpg';

// tamagotchi images
import tamaMain from '../img/tamagotchi_sticker.jpg';
import tamaSticker from '../img/tama_sticker.jpg';
import tamaSticker2 from '../img/tama_sticker2.jpg';

const styles = {
    pageContainer: {
        width: '90%',
        textAlign: '-webkit-center',
        margin: 'auto',
    }
};


class Piece extends Component {
    render() {
        const path = this.props.location.pathname;
        var title = 'title';
        var description = 'description';
        var main_pic = 'main pic';
        var pic_one = 'pic one';
        var pic_two = 'pic two';
        var three_images = false;

        if (path === "/portfolio/tamagochi") {
            title = 'Tamagotchi Sticker Design';
            description = `The design for this sticker was inspired by the handheld Tamagotchi digital pets made popular
                in the 90’s. I created a digital illustration of a tin lunchbox with a cute reminder to feed your
                forgotten childhood Tamagotchi. I like when designs have a touch of nostalgia and this piece
                made me reminisce the days of carrying around a tin lunchbox and playing with my Tamagotchi
                when I was younger.`;
            main_pic = tamaMain;
            pic_one = tamaSticker;
            pic_two = tamaSticker2;
            three_images = true;

        } else if (path === "/portfolio/yruama") {
            title = 'Yruama T-Shirt Design';
            description =`Yruama is a musical project located in McAllen, TX with a background and sound coming from
                Mexico. Those roots are connected to using the beloved Mexican sweet bread, the concha, for
                the shirt design. I hand lettered the typeface to mimic the iconic cracks of the concha and give
                the design an overall movement.`;
                main_pic = conchaMain;
                pic_one = conchaShirt;
                pic_two = conchaMockup;
                three_images = true;

        } else if (path === "/portfolio/hindsvinyl") {
            title = 'Hinds Vinyl Cover';
            description = `Hinds is a Spanish indie rock band from Madrid formed by 4 women. This vinyl cover was
                inspired by their song, Easy, from their 2016 album Leave Me Alone. I tried to match the
                tumultuous energy of their music video by showing a lunch tray moments before a food fight,
                mirroring the crazed feeling I get when listening to this song.`;
                main_pic = hindsMain;
                pic_one = hindsCover;
        }
        return (
            <div name="page-container" style={{display:'flex', flexDirection:'column', justifyContent:'center'}} className="container">
                <div style={{color:'gray', paddingTop:'30px', display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center'}} name='text'>
                    <div style={{display:'flex', alignSelf:'center', maxWidth:'50%'}} name='title'>
                        <h1>{title}</h1>
                    </div>

                    <div style={{display:'flex', alignSelf:'center', maxWidth:'80%'}} name='description'>
                        <p>{description}</p>
                    </div>
                    
                </div>
                <div style={{paddingTop:'30px'}} name="artwork">
                    <div style={{display:'flex', justifyContent:'center'}} className="">
                        <img src={main_pic} style={{maxWidth:'33.33%', display:'flex', alignSelf:'center'}} className="img-fluid mb-4" alt="Main Piece"></img>
                    </div>

                    <div style={{margin:'3%', justifyContent:'center'}} className="row text-center">
                        <div style= {styles.image} key='key2' className="col-lg-4 col-md-6 mb-4">
                            <img src={pic_one} className="img-fluid mb-4" alt="Support Piece One"></img>
                        </div>

                        {three_images ? (
                            <div style= {styles.image} key='key3' className="col-lg-4 col-md-6 mb-4">
                                <img src={pic_two} className="img-fluid mb-4" alt="Support Piece Two"></img>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
                <a style={{color:'gray'}} href='/portfolio'>back to portfolio</a>
            </div>
            
            
            
        );
    }
}

export default Piece;