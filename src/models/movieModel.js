import pool from '../config/db.js';

const getAllMovies = async () => {
    const results = await pool.query('SELECT * FROM movies ORDER BY id ASC');
    return results.rows;
}

const getMovieById = async (id) => {
    const results = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
    return results.rows[0];
}

export { getAllMovies, getMovieById };