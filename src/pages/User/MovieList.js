import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import apiConfig from '../../config';
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isGridView, setIsGridView] = useState(true); 
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 10;

    useEffect(() => {
        fetchMovies();
        fetchFavorites();
    }, []);

    const fetchMovies = async () => {
        try {
            const { data } = await axios.get(`${apiConfig.backendUrl}/api/movies`);
            setMovies(data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const fetchFavorites = async () => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get(`${apiConfig.backendUrl}/api/movies/favorites`, {
                headers: { Authorization: token },
            });
            setFavorites(data);
        } catch (error) {
            console.error('Error fetching favorites:', error);
        }
    };

    const toggleFavorite = async (movie) => {
        try {
            const token = localStorage.getItem('token');
            const isAlreadyFavorite = favorites.some((fav) => fav.movieId === movie.trackId);

            await axios.post(
                `${apiConfig.backendUrl}/api/movies/favorites`,
                { movieId: movie.trackId, movieDetails: movie },
                { headers: { Authorization: token } }
            );

            if (isAlreadyFavorite) {
                setFavorites((prevFavorites) =>
                    prevFavorites.filter((fav) => fav.movieId !== movie.trackId)
                );
            } else {
                setFavorites((prevFavorites) => [
                    ...prevFavorites,
                    { movieId: movie.trackId, movieDetails: movie },
                ]);
            }
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    // Pagination logic
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Movies</h1>
                <button
                    onClick={() => setIsGridView(!isGridView)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
                </button>
            </div>

            <div
                className={`${
                    isGridView
                        ? 'grid grid-cols-2 md:grid-cols-4 gap-4' 
                        : 'grid grid-cols-1 gap-4' 
                }`}
            >
                {currentMovies.map((movie) => (
                    <MovieCard
                        key={movie.trackId}
                        movie={movie}
                        isFavorite={favorites.some((fav) => fav.movieId === movie.trackId)}
                        toggleFavorite={toggleFavorite}
                        isGridView={isGridView} 
                    />
                ))}
            </div>

            <div className="flex justify-center mt-6">
                {[...Array(Math.ceil(movies.length / moviesPerPage)).keys()].map((page) => (
                    <button
                        key={page}
                        onClick={() => paginate(page + 1)}
                        className={`px-3 py-2 mx-1 rounded ${
                            currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                    >
                        {page + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Movies;

