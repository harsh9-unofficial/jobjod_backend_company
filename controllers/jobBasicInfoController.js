const { JobBasicInfo } = require("../models/jobBasicInfoModel");

exports.createJob = async (req, res) => {
  try {
    const job = await JobBasicInfo.create(req.body);
    res.status(201).json({ message: "Job created successfully", job });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await JobBasicInfo.findAll();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const job = await JobBasicInfo.findOne(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await JobBasicInfo.findOne(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    await job.update(req.body);
    res.status(200).json({ message: "Job updated successfully", job });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await JobBasicInfo.findOne(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    await job.destroy();
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
