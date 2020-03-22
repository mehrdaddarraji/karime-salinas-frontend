import React, {Component} from 'react';
import Email from '../components/Email';

class Contact extends Component {
    render() {
        return (

            <div style={{overflow:'hidden', marginTop:'40px', marginLeft:'10%'}}>
                <div style={{fontFamily: '"Avantgarde", sans-serif', color:'grey', marginTop:'10%', width:'20%', float:'left'}}>
                        <p>Inquiries:</p>
                        <p>Please fill out the form on the right to email us directly at example@gmail.com</p>
                </div>

            
                <div style={{width:'50%', float:'right'}}>
                    <Email />
                </div>
            </div>
        );
    }
}

export default Contact;