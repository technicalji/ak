const express = require("express");
const router = express.Router();
const middleware = require("../middleware/project");
const { saveProject, getPrject } = require("../controllers/project");

router.post("/upload/project",middleware,saveProject);
router.get("/project/get", getPrject);

module.exports = router;