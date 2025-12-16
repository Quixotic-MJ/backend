import { config } from "dotenv";

// Load environment variables FIRST, before any imports
config();
console.log("DB_USERNAME:", process.env.DB_USERNAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

import express from 'express';
import cors from 'cors';

//Import routes (these will import models which import db.js)
import movieRoutes from './routes/movieRoutes.js';
import authRoutes from './routes/authRoutes.js';


const app = express();
const port = 5001;

app.use(cors());

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API routes
app.use('/movies', movieRoutes);
app.use('/auth', authRoutes);



app.listen(port, () => {
    console.log(`server is running at ${port}`);
})

