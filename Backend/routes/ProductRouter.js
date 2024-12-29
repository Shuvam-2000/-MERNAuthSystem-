const { ensureAuthenticated } = require('../middlewares/Auth');
const router = require('express').Router();

// product route
router.get('/', ensureAuthenticated, (req,res) => {
    console.log("logged in user", req.user) // debugging
    res.status(200).json([
        {
            id: 1,
            name: "mobile",
            price: 10000
        },
        {
            id: 2,
            name: "tv",
            price: 50000
        }
    ])
});

module.exports = router;