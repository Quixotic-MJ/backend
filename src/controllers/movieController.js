import { getAllMovies, getMovieById } from "../models/movieModel.js"; 

const fetchAllMovies = async (req, res) => {
    try {
        const movies = await getAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ message: 'Server error' });
    }   
}

const fetchMovieById = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await getMovieById(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (error) {
        console.error('Error fetching movie by ID:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

export { fetchAllMovies, fetchMovieById };