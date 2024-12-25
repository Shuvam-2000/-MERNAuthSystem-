require('dotenv').config();
const express = require('express');
require('./models/db');

// intialize express
const app = express();

// initalize the port
const PORT = process.env.PORT || 8080;

// route
app.get('/', (req,res) => {
    res.send('Hello');
})

app.listen(PORT, () => console.log(`Server Started At PORT: ${PORT}`));