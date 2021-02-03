const express = require('express');
const router = express.Router();

// Root endpoint
router.get("/", (req, res, next) => {
    res.json({"message":"Movies!"})
});

module.exports = router;