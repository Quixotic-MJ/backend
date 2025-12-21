import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { fetchWatchlist, addItemToWatchlist } from "../controllers/watchlistController.js";


const router = express.Router();

router.get("/", authMiddleware, fetchWatchlist);
router.post("/", authMiddleware, addItemToWatchlist);

export default router;