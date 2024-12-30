require('dotenv').config();
require('./models/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter')
const ProductRouter = require('./routes/ProductRouter')

// intialize express
const app = express();

// initalize the port
const PORT = process.env.PORT || 8080;

// middleware
app.use(bodyParser.json());
app.use(cors());  // Enable CORS for all routes

// all routes here
app.get('/', (req,res) => {
    res.send('Hello');
})

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);


app.listen(PORT, () => console.log(`Server Started At PORT: ${PORT}`));