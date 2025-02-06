import express from 'express';
import { postRecipe, getRecipe, updateRecipe, deleteRecipe } from '../controllers/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.post('/', postRecipe);
recipeRouter.get('/', getRecipe);
recipeRouter.put('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);

export default recipeRouter