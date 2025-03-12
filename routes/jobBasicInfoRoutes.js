const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobBasicInfoController");
const authMiddleware = require("../middleware/authMiddleware"); // Use the authentication middleware

router.post("/", authMiddleware, jobController.createJob);
router.get("/", authMiddleware, jobController.getJobs);
router.get("/:id", authMiddleware, jobController.getJobById);
router.put("/:id", authMiddleware, jobController.updateJob);
router.delete("/:id", authMiddleware, jobController.deleteJob);

module.exports = router;
