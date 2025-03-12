const CompanyOverview = require("../models/companyOverviewModel");

// Create a new Company Overview entry
exports.createCompanyOverview = async (req, res) => {
  try {
    const { userId, companyIndustry, overview, vision, mission } = req.body;
    const newCompany = await CompanyOverview.create({ userId, companyIndustry, overview, vision, mission });
    res.status(201).json({ message: "Company overview saved successfully!", data: newCompany });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all company overviews
exports.getAllCompanyOverviews = async (req, res) => {
  try {
    const companies = await CompanyOverview.findAll();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single company overview by ID
exports.getCompanyOverviewById = async (req, res) => {
  try {
    const company = await CompanyOverview.findByPk(req.params.id);
    if (!company) return res.status(404).json({ message: "Company overview not found" });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update company overview by ID
exports.updateCompanyOverview = async (req, res) => {
  try {
    const company = await CompanyOverview.findByPk(req.params.id);
    if (!company) return res.status(404).json({ message: "Company overview not found" });

    await company.update(req.body);
    res.status(200).json({ message: "Company overview updated successfully", data: company });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete company overview by ID
exports.deleteCompanyOverview = async (req, res) => {
  try {
    const company = await CompanyOverview.findByPk(req.params.id);
    if (!company) return res.status(404).json({ message: "Company overview not found" });

    await company.destroy();
    res.status(200).json({ message: "Company overview deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
