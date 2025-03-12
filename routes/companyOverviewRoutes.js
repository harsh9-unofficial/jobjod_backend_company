const express = require("express");
const router = express.Router();
const companyOverviewController = require("../controllers/companyOverviewController");
const authMiddleware = require("../middleware/authMiddleware"); // Use the authentication middleware

router.post("/", authMiddleware, companyOverviewController.createCompanyOverview);
router.get("/", authMiddleware, companyOverviewController.getAllCompanyOverviews);
router.get("/:id", authMiddleware, companyOverviewController.getCompanyOverviewById);
router.put("/:id",authMiddleware, companyOverviewController.updateCompanyOverview);
router.delete("/:id",authMiddleware, companyOverviewController.deleteCompanyOverview);

module.exports = router;
