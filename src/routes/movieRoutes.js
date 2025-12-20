import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/hello', authMiddleware, (req, res) => {
    res.json({name: "John", age: 25});
})

export default router;