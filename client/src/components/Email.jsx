import React, {Component} from 'react';

class Email extends Component {

    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        // change states when input
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        return (
            <form>
                <div style={{fontFamily: '"Avantgarde", sans-serif', color:'#0C0B37', width:'400px'}}>
                    
                    <div className="form-group" style={{ marginLeft:'2%' }}>
                        <h2>Contact Us</h2>
                    </div>

                    <div className="form-group"  >
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} htmlFor="firstName">First Name</label>
                            <input value={this.state.firstName} onChange={this.handleChange} style={{ border:'1px solid #0C0B37'}} type="text" className="form-control" name="firstName" aria-describedby="emailHelp"/>
                        </div>
                    </div>

                    <div className="form-group" >
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} htmlFor="lastName">Last Name</label>
                            <input value={this.state.lastName} onChange={this.handleChange}  style={{ border:'1px solid #0C0B37'}} type="text" className="form-control" name="lastName" aria-describedby="emailHelp"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} htmlFor="email">Email</label>
                            <input value={this.state.email} onChange={this.handleChange}  style={{ border:'1px solid #0C0B37'}} type="email" className="form-control" name="email" aria-describedby="emailHelp"/>
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
                            <textarea  value={this.state.message} onChange={this.handleChange}  style={{ border:'1px solid #0C0B37'}} className="form-control" name="message" rows="3"></textarea>
                        </div>
                    </div>

                    <button style={{ marginLeft:'80%', backgroundColor:'#373B4D', borderColor:'#373B4D'}}  type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
        );
    }
}

export default Email;

