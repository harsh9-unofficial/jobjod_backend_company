const Company = require("../models/companyModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Create a new company
exports.createCompany = async (req, res) => {
  const {
    userId,
    companyName,
    interviewerName,
    email,
    password,
    yearEst,
    phone,
    location,
    website,
    pincode,
  } = req.body;

  try {
    // Check if the company already exists
    const existingCompany = await Company.findOne({ where: { userId } });
    if (existingCompany) {
      return res.status(400).json({ message: "Company User Already Exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new company
    const company = await Company.create({
      userId,
      companyName,
      interviewerName,
      email,
      password: hashedPassword,
      yearEst,
      phone,
      location,
      website,
      pincode,
    });

    // Return the created company (excluding password)
    const companyWithoutPassword = { ...company.toJSON() };
    delete companyWithoutPassword.password;

    res.status(201).json(companyWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login company and generate JWT token
exports.loginCompany = async (req, res) => {
  const { email, password } = req.body;

  try {
    const company = await Company.findOne({ where: { email } });
    if (!company) {
      return res.status(400).json({ message: "Company not found" });
    }

    // Compare password (for regular companys)
    const isValid = await bcrypt.compare(password, company.password);
    if (!isValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token for regular company
    const token = jwt.sign({ companyId: company.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return the token
    res.status(200).json({ role: "JobSeeker", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
