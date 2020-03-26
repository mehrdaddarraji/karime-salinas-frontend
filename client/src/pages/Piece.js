import React, {Component} from 'react';

class Piece extends Component {
    render() {
        const path = this.props.location.pathname;
        var title = 'title';
        var description = 'description';

        if (path === "/portfolio/tamagochi") {
            title = 'TAMAGOTCHI STICKER DESIGN';
            description = `The design for this sticker was inspired by the handheld Tamagotchi digital pets made popular
                in the 90’s. I created a digital illustration of a tin lunchbox with a cute reminder to feed your
                forgotten childhood Tamagotchi. I like when designs have a touch of nostalgia and this piece
                made me reminisce the days of carrying around a tin lunchbox and playing with my Tamagotchi
                when I was younger.`;

        } else if (path === "/portfolio/yruama") {
            title = 'YRUAMA TSHIRT DESIGN';
            description =`Yruama is a musical project located in McAllen, TX with a background and sound coming from
                Mexico. Those roots are connected to using the beloved Mexican sweet bread, the concha, for
                the shirt design. I hand lettered the typeface to mimic the iconic cracks of the concha and give
                the design an overall movement.`;

        } else if (path === "/portfolio/hindsvinyl") {
            title = 'HINDS VINYL COVER';
            description = `Hinds is a Spanish indie rock band from Madrid formed by 4 women. This vinyl cover was
                inspired by their song, Easy, from their 2016 album Leave Me Alone. I tried to match the
                tumultuous energy of their music video by showing a lunch tray moments before a food fight,
                mirroring the crazed feeling I get when listening to this song.`;
        }
        return (
            <div name='text'>
                <div name='title'>
                    <h1>{title}</h1>
                </div>

                <div name='description'>
                    <p>{description}</p>
                </div>
                
            </div>
            
        );
    }
}

export default Piece;