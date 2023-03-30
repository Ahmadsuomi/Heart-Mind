const express = require('express');
const router = express.Router();

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
