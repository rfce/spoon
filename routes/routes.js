const expres = require('express')
const router = expres.Router()

const Author = require("../controllers/Author")

// Agent
router.post("/Image/upload", Author.uploadImage)

module.exports = router
