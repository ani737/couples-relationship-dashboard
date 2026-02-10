const express = require('express');
const router = express.Router();
const milestoneController = require('../controllers/milestoneController');

// @route   GET /api/v1/milestones/:coupleId
// @desc    Get all milestones for a couple
router.get('/:coupleId', milestoneController.getMilestones);

// @route   POST /api/v1/milestones
// @desc    Create a new milestone
router.post('/', milestoneController.createMilestone);

// @route   DELETE /api/v1/milestones/:id
// @desc    Delete a milestone
router.delete('/:id', milestoneController.deleteMilestone);

module.exports = router;
