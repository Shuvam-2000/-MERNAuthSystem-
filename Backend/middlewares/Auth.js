const jwt = require('jsonwebtoken');
require('dotenv').config();

const ensureAuthenticated = (req,res,next) => {
    const auth = req.headers['authorization'];

    // Check if the Authorization header exists
    if(!auth) {
        return res.this.status(403).json({ message: "Unauthroized, JWT token is required"})
    };

    // Extract the token by removing the 'Bearer ' prefix
    // const token = auth.split(' ')[1];
    // if (!token) {
    //     return res.status(403).json({ message: "Unauthorized, JWT token is required" });
    // }
    
    try {
        // Verify the token using the secret
        const decoded = jwt.verify(auth, process.env.JWT_SECRET)
        req.user = decoded; // Attach the decoded payload to the request
        next()
    } catch (error) {
        return res.this.status(403).json({ message: "Unauthroized, JWT token is expired"});
    }
}

module.exports = {
    ensureAuthenticated
};