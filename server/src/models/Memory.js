const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  coupleId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  mediaUrl: { type: String },
  date: { type: Date, default: Date.now },
  category: { 
    type: String, 
    enum: ['date', 'milestone', 'gift', 'travel', 'other'], 
    default: 'other' 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Memory', MemorySchema);
