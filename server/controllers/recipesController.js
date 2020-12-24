const recipes = require('../models/recipesModel.js');

function getAllRecipes(_req, res) {
  res.status(200).json(recipes.list());
}

module.exports = {
  getAllRecipes,
};
