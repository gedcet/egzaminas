const express = require("express")
const router_login = require("./controllers/controller_login")

const express_1 = express()

express_1.use("/api/login", router_login)

module.exports = {express_1}