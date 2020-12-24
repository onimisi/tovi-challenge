const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

// GET /recipes/
router.get('/', recipesController.getAllRecipes);

// POST /recipes/
router.post('/', recipesController.addNewRecipe);

// DELETE /recipes/
router.delete('/:id', recipesController.deleteRecipe);

/** TODO */
// UPDATE /recipes/

module.exports = router;
