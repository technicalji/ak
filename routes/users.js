const express = require("express");
const { saveUser, getUsers } = require("../controllers/users");
const router = express.Router();

router.post("/add/user",saveUser);
router.get("/get/user",getUsers);

module.exports = router;