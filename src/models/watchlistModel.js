import pool from '../config/db.js'

const getWatchlistByUserId = async (userId) => {
    const query = 'SELECT * FROM watchlist_items WHERE user_id = $1'
    const values = [userId]
    const results = await pool.query(query, values)
    return results.rows
}

const addToWatchlist = async (userId, movieId, status, rating, notes) => {
    const query = 'INSERT INTO watchlist_items (user_id, movie_id, status, rating, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *'
    const values = [userId, movieId, status, rating, notes]
    const results = await pool.query(query, values)
    return results.rows[0]
}
    
export { getWatchlistByUserId, addToWatchlist }