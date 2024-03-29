import React, {Component} from 'react';
import axios from 'axios';

class Email extends Component {

    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            submitted: false,
            errMessage: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        // change states when input
        this.setState({ [e.target.name]: e.target.value})
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { firstName, lastName, email, phone, message } = this.state
        
        const res = await axios.post('/api/form', {
            firstName,
            lastName,
            email,
            phone,
            message
        })
        console.log('after post')

        if (res.status === 200) {
            this.setState ({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
                submitted: true
            })
        } else {
            this.setState ({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
                submitted: true,
                errMessage: true
            })
        }
        
        
        
    }

    render() {
        return (
            <form id= 'main-form' onSubmit={this.handleSubmit} ref='form' style={{width:'40vmax', padding:'5%'}}>
                <div style={{fontFamily: '"Avantgarde", sans-serif', color:'#0C0B37', width:'auto'}}>
                    
                    <div className="form-group" style={{ marginLeft:'2%' }}>
                        <h2>Contact Us</h2>
                    </div>

                    <div className="form-group"  >
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} htmlFor="firstName">First Name</label>
                            <input value={this.state.firstName} onChange={this.handleChange} style={{ border:'1px solid #0C0B37'}} type="text" className="form-control" name="firstName" aria-describedby="emailHelp" required/>
                        </div>
                    </div>

                    <div className="form-group" >
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} htmlFor="lastName">Last Name</label>
                            <input value={this.state.lastName} onChange={this.handleChange}  style={{ border:'1px solid #0C0B37'}} type="text" className="form-control" name="lastName" aria-describedby="emailHelp" required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} htmlFor="email">Email</label>
                            <input value={this.state.email} onChange={this.handleChange}  style={{ border:'1px solid #0C0B37'}} type="email" className="form-control" name="email" aria-describedby="emailHelp" required/>
                        </div>
                    </div>

                    <div className="form-group"  >
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} htmlFor="phone">Phone</label>
                            <input value={this.state.phone} onChange={this.handleChange} style={{ border:'1px solid #0C0B37'}} type="text" className="form-control"  name="phone" aria-describedby="emailHelp"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} htmlFor="message">Leave us a message...</label>
                            <textarea  value={this.state.message} onChange={this.handleChange}  style={{ border:'1px solid #0C0B37'}} className="form-control" name="message" rows="3" required></textarea>
                        </div>
                    </div>

                    <button style={{ marginLeft:'80%', backgroundColor:'#373B4D', borderColor:'#373B4D'}}  type="submit" className="btn btn-primary">Send</button>

                    {this.state.submitted && !this.state.errMessage? (
                        <div style={{ marginTop:'20px' }} className="alert alert-success" alert-dismissible fade show role="alert">
                            Message Sent!
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    ) : this.state.submitted && this.state.errMessage? (

                        // TODO: have an error message?
                        <div style={{ marginTop:'20px' }} class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Oops, message not sent!</strong> Try emailing directly, or contacting through other means.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </form>
        );
    }
}

export default Email;

