import React, {Component} from 'react';
import Email from '../components/Email';

class Contact extends Component {
    render() {
        return (

            <div style={{overflow:'hidden', margin:'10%', display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', alignItems:'center'}}>
                <div style={{fontFamily: '"Avantgarde", sans-serif', width:'30%', color:'grey', display:'flex', alignSelf:'auto', flexDirection:'column', order:'1'}}>
                        <p>Inquiries:</p>
                        <p>Please fill out the form on the right to email us directly at example@gmail.com</p>
                        <div style={{width:'70%', display:'flex', alignItems:'flex-start', justifyContent:'space-between'}}>
                            <a href="https://www.instagram.com/karidesigns3/"><div className="fab fa-instagram" style={{color:'#373B4D'}}></div></a>
                            <a href="https://www.linkedin.com/in/karime-salinas-b9098616b/"><div className="fab fa-linkedin-in" style={{color:'#373B4D'}}></div></a>
                            <a href="https://www.behance.net/karimesalinas"><div className="fab fa-behance" style={{color:'#373B4D'}}></div></a>
                        </div>
                </div>

            
                <div style={{display:'flex', alignSelf:'auto', order:'2'}}>
                    <Email />
                </div>
            </div>
        );
    }
}

export default Contact;