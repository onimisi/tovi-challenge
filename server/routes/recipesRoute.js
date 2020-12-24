const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

// GET /recipes/
router.get('/', recipesController.getAllRecipes);

// POST /recipes/
router.post('/', recipesController.addNewRecipe);

/** TODO */
// DELETE /recipes/

/** TODO */
// UPDATE /recipes/

module.exports = router;
