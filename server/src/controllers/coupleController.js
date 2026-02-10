const Couple = require('../models/Couple');

exports.getCoupleDetails = async (req, res) => {
  try {
    const couple = await Couple.findById(req.params.id);
    res.status(200).json(couple);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCouple = async (req, res) => {
  try {
    const couple = new Couple(req.body);
    const newCouple = await couple.save();
    res.status(201).json(newCouple);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
