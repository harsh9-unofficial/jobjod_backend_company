const express = require("express");
const router = express.Router();
const {
  createRecognition,
  // getAllRecognition,
  updateRecognition,
  deleteRecognition,
  getRecognitionForLoggedInUser,
} = require("../controllers/recognitionController");
const authMiddleware = require("../middleware/authMiddleware"); // Use the authentication middleware

// All recognition routes are protected by authentication
router.post("/", authMiddleware, createRecognition); // Create Recognition (requires login)
router.get("/", authMiddleware, getRecognitionForLoggedInUser); // Get all Recognition records (requires login)
router.put("/:id", authMiddleware, updateRecognition); // Update Recognition (requires login)
router.delete("/:id", authMiddleware, deleteRecognition); // Delete Recognition (requires login)

module.exports = router;
