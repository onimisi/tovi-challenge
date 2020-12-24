const fs = require('fs'); // file system module

const recipesFile = './data/recipes.json';

function list() {
  const data = fs.readFileSync(recipesFile);
  return JSON.parse(data);
}

module.exports = { list };
