const express = require("express");
const router = express.Router();
const { createCompany, loginCompany } = require("../controllers/companyController");

router.post("/register", createCompany);
router.post("/login", loginCompany);

module.exports = router;
