import express from 'express';

const router = express.Router();

router.get('/hello', (req, res) => {
    res.json({name: "John", age: 25});
})

export default router;