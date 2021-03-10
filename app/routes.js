const express = require('express')
const router = express.Router()

// Import the routes for each version
router.use(/\/v([0-9]+)/, (req, res, next) => {
  return require(`./views/v${req.params[0]}/_routes`)(req, res, next);
})

// Add your routes here - above the module.exports line

module.exports = router
