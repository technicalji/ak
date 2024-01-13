const express = require("express");
const { saveUser } = require("../controllers/users");
const router = express.Router();

router.post("/add/user",saveUser);

module.exports = router;