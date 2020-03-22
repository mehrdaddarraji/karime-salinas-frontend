// https://www.youtube.com/watch?v=JpcLd5UrDOQ
// https://www.youtube.com/watch?v=EPnBO8HgyRU

// get express
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailgun = require("mailgun-js");
const DOMAIN = SECRET_DOMAIN;
const api_key = SECRET_KEY;


// initialize express app
const app = express();

// configure data parsing for email form
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



const mg = mailgun({apiKey: api_key, domain: DOMAIN});

app.post('/api/form', (req, res) => {
    console.log(req.body)

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
        to: 'ixbaadriana@gmail.com',
        subject: 'New Design Request',
        text: req.body.message,
        html: htmlEmail 
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });
})

// port 3001 or whatever port process.env sets up for us
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})