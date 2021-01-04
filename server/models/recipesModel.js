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

function getRecipe(id) {
  console.log(id);
  const recipesArr = list();
  return recipesArr.find((recipe) => recipe.id === parseInt(id));
}

function removeRecipe(id) {
  const recipesArr = list();
  const recipeIndex = recipesArr.findIndex(
    (recipe) => recipe.id === parseInt(id)
  );
  if (recipeIndex === -1) {
    return false;
  }
  recipesArr.splice(recipeIndex, 1);
  fs.writeFileSync(recipesFile, JSON.stringify(recipesArr));
  return recipesArr;
}

function updateRecipe(id, data) {
  const recipesArr = list();
  const recipeIndex = recipesArr.findIndex(
    (recipe) => recipe.id === parseInt(id)
  );
  if (recipeIndex === -1) {
    return false;
  }
  recipesArr.splice(recipeIndex, 1, {
    id: parseInt(id),
    name: data.name,
    instructions: data.instructions,
    ingredients: data.ingredients,
  });
  fs.writeFileSync(recipesFile, JSON.stringify(recipesArr));
  return recipesArr;
}

module.exports = { list, add, getRecipe, removeRecipe, updateRecipe };
