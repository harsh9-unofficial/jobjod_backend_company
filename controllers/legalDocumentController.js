const LegalDocument = require('../models/LegalDocument');

// Helper function to get uploaded files dynamically
const getUploadedFiles = (req) => {
    const uploadedFiles = {};

    // Log files to inspect their structure
    console.log("Uploaded Files:", req.files);

    if (req.files && req.files.length > 0) {
        req.files.forEach(file => {
            uploadedFiles[file.fieldname] = file.path; // Save each file with its field name
        });
    }

    return uploadedFiles;
};



// Add Legal Document (Flexible Upload)
exports.addLegalDocument = async (req, res) => {
    try {
        const { companyId, gstNumber, panNumber, fssaiNumber } = req.body;
        const uploadedFiles = getUploadedFiles(req); // Get dynamically uploaded files

        const document = await LegalDocument.create({
            companyId,
            gstNumber,
            panNumber,
            fssaiNumber,
            documents: uploadedFiles  // Store all files as JSON
        });

        res.status(201).json({ success: true, message: "Documents uploaded successfully", data: document });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get Legal Documents by Company ID
exports.getLegalDocuments = async (req, res) => {
    try {
        const { companyId } = req.params;
        const document = await LegalDocument.findOne({ where: { companyId } });

        if (!document) {
            return res.status(404).json({ success: false, message: "No documents found" });
        }

        res.status(200).json({ success: true, data: document });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
