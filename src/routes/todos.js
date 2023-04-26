const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/todos', todoController.readAll);
router.post('/todos', todoController.create);
router.get('/todos/:id', todoController.readOne);
router.put('/todos/:id', todoController.update);
router.delete('/todos/:id', todoController.delete);

module.exports = router;