import React, {Component} from 'react';

class Email extends Component {
    render() {
        return (
            <form>
                <div style={{ marginLeft:'45%', width:'400px', marginTop:'20px', fontFamily: '"Avantgarde", sans-serif', color:'#0C0B37'}}>
                    
                    <div class="form-group" style={{ marginLeft:'2%' }}>
                        <h2>Contact Us</h2>
                    </div>

                    <div class="form-group">
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} for="inputFirstName">First Name</label>
                            <input style={{ border:'1px solid #0C0B37'}} type="text" class="form-control" id="inputFirstName" aria-describedby="emailHelp"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} for="inputLastName">Last Name</label>
                            <input style={{ border:'1px solid #0C0B37'}} type="text" class="form-control" id="inputLastName" aria-describedby="emailHelp"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} for="inputEmail">Email</label>
                            <input style={{ border:'1px solid #0C0B37'}} type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} for="inputPhone">Phone</label>
                            <input style={{ border:'1px solid #0C0B37'}} type="text" class="form-control"  id="inputPhone" aria-describedby="emailHelp"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <div className="col">
                            <label style={{ fontStyle:'italic'}} for="inputText">Leave us a message...</label>
                            <textarea style={{ border:'1px solid #0C0B37'}} class="form-control" id="inputText" rows="3"></textarea>
                        </div>
                    </div>

                    <button style={{ marginLeft:'80%', backgroundColor:'#373B4D', borderColor:'#373B4D'}}  type="submit" class="btn btn-primary">Send</button>
                </div>
            </form>
        );
    }
}

export default Email;

