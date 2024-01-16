const express = require("express");
const { sendEmail } = require("../controllers/emailContact");
const router = express.Router();

router.post("/contact/email", sendEmail);
module.exports = router;