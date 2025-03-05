const Culture = require("../models/cultureModel");

// Create Culture
exports.createCulture = async (req, res) => {
  try {
    const culture = await Culture.create(req.body);
    res.status(201).json(culture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Cultures
exports.getAllCultures = async (req, res) => {
  try {
    const cultures = await Culture.findAll();
    res.status(200).json(cultures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Culture
exports.updateCulture = async (req, res) => {
  try {
    const culture = await Culture.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(culture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Culture
exports.deleteCulture = async (req, res) => {
  try {
    await Culture.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: "Culture deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
