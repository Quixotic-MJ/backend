import express from 'express';
import { fetchAllMovies, fetchMovieById } from '../controllers/movieController.js';

import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, fetchAllMovies);
router.get('/:id', authMiddleware, fetchMovieById);   


export default router;