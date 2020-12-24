const express = require('express');
const app = express();
const recipesRoute = require('./routes/recipesRoute');

const port = 3000;

// request.body middleware
app.use(express.json());

app.use('/recipes', recipesRoute);

app.listen(port, () => console.log(`Server running on ${port}`));
