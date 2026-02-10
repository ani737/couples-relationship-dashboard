const express = require('express');
const router = express.Router();
const memoryController = require('../controllers/memoryController');

router.get('/', memoryController.getAllMemories);
router.post('/', memoryController.createMemory);
router.delete('/:id', memoryController.deleteMemory);

module.exports = router;
