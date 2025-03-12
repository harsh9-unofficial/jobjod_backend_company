const express = require('express');
const multer = require('multer');
const path = require('path');
const { addLegalDocument, getLegalDocuments } = require('../controllers/legalDocumentController');

const router = express.Router();

// Multer Configuration (Flexible Uploads)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Routes
router.post('/upload', upload.any(), addLegalDocument);
router.get('/:companyId', getLegalDocuments);

module.exports = router;
