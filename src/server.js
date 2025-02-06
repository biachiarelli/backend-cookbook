import cors from 'cors';
import express from 'express';
import prismaMiddleware from './middleware/prismaMiddleware.js';
import recipeRouter from './routes/recipeRouter.js';

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())
app.use(prismaMiddleware)

app.use('/recipes', recipeRouter);

app.listen(PORT)