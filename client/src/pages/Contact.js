import React, {Component} from 'react';
import Email from '../components/Email';


class Contact extends Component {
    render() {
        return (

            <div style={{overflow:'hidden', margin:'3%', display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', alignItems:'center'}}>
                <div style={{fontFamily: '"Avantgarde", sans-serif', color:'grey', width:'30vmax', float:'left'}}>
                        <p>Inquiries:</p>
                        <p>Please fill out the following form to email directly at karisalinas113@gmail.com</p>
                        <div style={{width:'60%', display:'flex', alignItems:'flex-start', justifyContent:'space-between'}}>
                            <a href="https://www.instagram.com/karidesigns3/"><div className="fab fa-instagram" style={{color:'#373B4D'}}></div></a>
                            <a href="https://www.linkedin.com/in/karime-salinas-b9098616b/"><div className="fab fa-linkedin-in" style={{color:'#373B4D'}}></div></a>
                            <a href="https://www.behance.net/karimesalinas"><div className="fab fa-behance" style={{color:'#373B4D'}}></div></a>
                        </div>
                </div>

            
                <div style={{float:'right', display:'flex', alignSelf:'auto', padding:'20px'}}>
                    <Email />
                </div>
            </div>
        );
    }
}

export default Contact;