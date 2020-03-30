import React, {Component} from 'react';
import Email from '../components/Email';


class Contact extends Component {
    render() {
        return (

            <div style={{overflow:'hidden', marginTop:'40px', marginLeft:'10%'}}>
                <div style={{fontFamily: '"Avantgarde", sans-serif', color:'grey', marginTop:'10%', width:'20%', float:'left'}}>
                        <p>Inquiries:</p>
                        <p>Please fill out the form on the right to email directly at karisalinas113@gmail.com</p>
                        <div style={{width:'60%', display:'flex', alignItems:'flex-start', justifyContent:'space-between'}}>
                            <a href="https://www.instagram.com/karidesigns3/"><div className="fab fa-instagram" style={{color:'#373B4D'}}></div></a>
                            <a href="https://www.linkedin.com/in/karime-salinas-b9098616b/"><div className="fab fa-linkedin-in" style={{color:'#373B4D'}}></div></a>
                            <a href="https://www.behance.net/karimesalinas"><div className="fab fa-behance" style={{color:'#373B4D'}}></div></a>
                        </div>
                </div>

            
                <div style={{width:'50%', float:'right'}}>
                    <Email />
                </div>
            </div>
        );
    }
}

export default Contact;