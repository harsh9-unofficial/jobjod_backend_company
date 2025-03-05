const express = require("express");
const router = express.Router();
const {
  createCulture,
  getAllCultures,
  updateCulture,
  deleteCulture,
} = require("../controllers/cultureController");
const authMiddleware = require("../middleware/authMiddleware"); // Use the authentication middleware

// All culture routes are protected by authentication
router.post("/", authMiddleware, createCulture); // Create Culture (requires login)
router.get("/", authMiddleware, getAllCultures); // Get all Cultures (requires login)
router.put("/:id", authMiddleware, updateCulture); // Update Culture (requires login)
router.delete("/:id", authMiddleware, deleteCulture); // Delete Culture (requires login)

module.exports = router;
