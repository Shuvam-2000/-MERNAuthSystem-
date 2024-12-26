
const router = require('express').Router();

// login route
router.post('/', (req,res) => {
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 50000
        }
    ])
});

module.exports = router;