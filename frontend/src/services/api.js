import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5001',
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

//api calls
export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);
export const fetchAllMovies = () => API.get('/movies');
export const fetchMovieById = (id) => API.get(`/movies/${id}`); 
 
export const fetchWatchlist = () => API.get(`/watchlist`);
export const addItemToWatchlist = (data) => API.post(`/watchlist`, data);



export default API;