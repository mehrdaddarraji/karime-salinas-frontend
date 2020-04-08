// https://www.youtube.com/watch?v=JpcLd5UrDOQ
// https://www.youtube.com/watch?v=EPnBO8HgyRU

require('dotenv').config()

// get express
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
//const mailgun = require("mailgun-js");
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD;


// initialize express app
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// configure data parsing for email form
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//const mg = mailgun({apiKey: api_key, domain: DOMAIN});

app.post('/api/form', (req, res) => {
    console.log(req.body)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,//replace with your email
            pass: pass //replace with your password
        }
    });
        

    const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>First Name: ${req.body.firstName}</li>
                <li>Last Name: ${req.body.lastName}</li>
                <li>Email: ${req.body.email}</li>
                <li>Phone: ${req.body.phone}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `

    const data = {
        from: 'karisalidesigns@designrequest.com',
        to: 'karisalinas113@gmail.com',
        subject: 'New Design Request',
        text: req.body.message,
        html: htmlEmail 
    };
    // mg.messages().send(data, function (error, body) {
    //     console.log(body);
    // });
    transporter.sendMail(data, function(error, info){
        if (error) {
            res.status(404)
            console.log(error);
            res.end()
        }
        else {
            res.status(200)
            console.log('Email sent: ' + info.response);
        }
    });

    return res.send('Email successfully sent')

})

// port 3001 or whatever port process.env sets up for us
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
