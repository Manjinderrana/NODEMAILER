
const router = require("express").Router()
const Mailer = require("../controllers/Mailer.js")
const createUser = require("../controllers/createUser.js")
const getUser = require("../controllers/getUser.js")
const loginUser = require("../controllers/loginUser.js")

router.post("/mail-text",Mailer)
router.post("/",createUser)
router.get("/one",getUser)
router.get("/login",loginUser)

module.exports = router

