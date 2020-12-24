const fs = require('fs'); // file system module

const recipesFile = './data/recipes.json';

function Recipe(id, name, instructions, ingredients) {
  this.id = id;
  this.name = name;
  this.instructions = instructions;
  this.ingredients = ingredients;
}

function list() {
  const data = fs.readFileSync(recipesFile);
  return JSON.parse(data);
}

function add(data) {
  const recipesArr = list();
  const recipeID = recipesArr.length + 1;
  const recipe = new Recipe(
    recipeID,
    data.name,
    data.instructions,
    data.ingredients
  );
  recipesArr.push(recipe);
  fs.writeFileSync(recipesFile, JSON.stringify(recipesArr));
  return recipe;
}

function remove(id) {
  const recipesArr = list();
  const recipeIndex = recipesArr.findIndex((recipe) => recipe.id === id);
  recipesArr.splice(recipeIndex, 1);
  fs.writeFileSync(recipesFile, JSON.stringify(recipesArr));
  return recipesArr;
}

module.exports = { list, add, remove };
