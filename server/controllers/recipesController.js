const recipes = require('../models/recipesModel.js');

function getAllRecipes(_req, res) {
  res.status(200).json(recipes.list());
}

function addNewRecipe(req, res) {
  if (!req.body.name || !req.body.instructions || !req.body.ingredients) {
    res.status(400).json({
      error: 'POST body must contain all requiredProperties',
      requiredProperties: ['name', 'instructions', 'ingredients'],
    });
    return;
  }

  const newRecipe = {
    name: req.body.name,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients,
  };
  res.status(201).json(recipes.add(newRecipe));
}

/** TODO */
function removeRecipe() {}

/** TODO */
function updateRecipe() {}

module.exports = {
  getAllRecipes,
  addNewRecipe,
  removeRecipe,
  updateRecipe,
};
