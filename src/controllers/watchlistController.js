import { getWatchlistByUserId , addToWatchlist } from "../models/watchlistModel.js";

const fetchWatchlist = async (req, res) => {
    const userId = req.params.userId;
    try {
        const watchlist = await getWatchlistByUserId(userId);
        res.status(200).json(watchlist);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch watchlist' });
    }
};

const addItemToWatchlist = async (req, res) => {
    const userId = req.params.userId;
    const { movieId, status, rating, notes } = req.body;
    try {
        const newItem = await addToWatchlist(userId, movieId, status, rating, notes);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add item to watchlist' });
    }
};

export { fetchWatchlist, addItemToWatchlist };