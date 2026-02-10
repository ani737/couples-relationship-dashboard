const Milestone = require('../models/Milestone');

// Get all milestones for a couple
exports.getMilestones = async (req, res) => {
  try {
    const { coupleId } = req.params;
    const milestones = await Milestone.find({ coupleId }).sort({ date: 1 });
    res.status(200).json(milestones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new milestone
exports.createMilestone = async (req, res) => {
  const { title, date, description, coupleId } = req.body;
  try {
    const newMilestone = new Milestone({ title, date, description, coupleId });
    const savedMilestone = await newMilestone.save();
    res.status(201).json(savedMilestone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a milestone
exports.deleteMilestone = async (req, res) => {
  try {
    await Milestone.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Milestone deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
