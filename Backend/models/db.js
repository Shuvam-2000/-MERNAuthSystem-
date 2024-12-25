const mongoose = require('mongoose');
require('dotenv').config();

const mongo_url = process.env.MONGO_URL;

// connect the database
mongoose.connect(mongo_url)
.then(() => console.log("MongoDb Connected")).catch((err) =>{
    console.log("Connection Failed", err)
})

