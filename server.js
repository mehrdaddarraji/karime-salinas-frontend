// https://www.youtube.com/watch?v=JpcLd5UrDOQ

// get express
const express = require('express');

const log = console.log;

// initialize express app
const app = express();

// get path to render html
const path = require('path');

const PORT = 8080;

// configure data parsing for email form
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json);


app.prototype('/email', (req, res) => {
    // TODO: 
    // send email here
    res.json({ message: "Message received!" })
})

// render the route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

// get port listening
app.listen(PORT, () => log('Server is starting on PORT, ', PORT))