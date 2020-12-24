const recipes = require('../models/recipesModel.js');

function getAllRecipes(req, res) {
  res.status(200).json(recipes.list());
}

function addNewRecipe(req, res) {
  if (!req.body.name || !req.body.instructions || !req.body.ingredients) {
    return res.status(400).json({
      error: 'POST body must contain all requiredProperties',
      requiredProperties: ['name', 'instructions', 'ingredients'],
    });
  }

  const newRecipe = {
    name: req.body.name,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients,
  };
  res.status(201).json(recipes.add(newRecipe));
}

function deleteRecipe(req, res) {
  const result = recipes.removeRecipe(req.params.id);
  if (!result) {
    return res.status(400).json({
      error: `can't delete the recipe with id ${req.params.id} because it doesn't exist`,
    });
  }
  res.json(result);
}

function updateRecipe(req, res) {
  if (!Object.keys(req.body).length) {
    return res.status(400).json({
      error: 'UPDATE must contain a body',
      optionalProperties: ['name', 'instructions', 'ingredients'],
    });
  }
  const result = recipes.updateRecipe(req.params.id, req.body);

  if (!result) {
    return res.status(400).json({
      error: `can't update the recipe with id ${req.params.id} because it doesn't exist`,
    });
  }
  res.json(result);
}

module.exports = {
  getAllRecipes,
  addNewRecipe,
  deleteRecipe,
  updateRecipe,
};
