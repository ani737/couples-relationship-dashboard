const Memory = require('../models/Memory');

exports.getAllMemories = async (req, res) => {
  try {
    const { coupleId } = req.query;
    const memories = await Memory.find({ coupleId });
    res.status(200).json(memories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMemory = async (req, res) => {
  try {
    const memory = new Memory(req.body);
    const newMemory = await memory.save();
    res.status(201).json(newMemory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteMemory = async (req, res) => {
  try {
    await Memory.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Memory deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
