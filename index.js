const express = require('express');
const app = express();
// const bodyParser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3000;

const initiateMongoServer = require("./config/db");
const router = require('./routes/index');

initiateMongoServer();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    res.send('Hello World!!');
});

// routes
app.use(router);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});