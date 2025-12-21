import "dotenv/config";

import express from 'express';
import cors from 'cors';

//Import routes (these will import models which import db.js)
import movieRoutes from './routes/movieRoutes.js';
import authRoutes from './routes/authRoutes.js';
import watchlistRoutes from './routes/watchlistRoutes.js';




const app = express();
const port = 5001;

app.use(cors());

//Body parser middleware
app.use(express.static('frontend'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//API routes
app.use('/movies', movieRoutes);
app.use('/auth', authRoutes);
app.use('/watchlist', watchlistRoutes);



app.listen(port, () => {
    console.log(`server is running at ${port}`);
})

