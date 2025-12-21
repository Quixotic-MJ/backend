import express from "express";
import { fetchWatchlist, addItemToWatchlist } from "../controllers/watchlistController.js";

const router = express.Router();

router.get("/:userId", fetchWatchlist);
router.post("/:userId", addItemToWatchlist);

export default router;