import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import apiConfig from '../../config';
const Favorite = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchFavorites();
    }, []);

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

            const isAlreadyFavorite = favorites.some((fav) => fav.movieId === movie.movieId);

            console.log('Toggling favorite for:', movie.movieId, 'Is favorite:', isAlreadyFavorite);

            const { data } = await axios.post(
                `${apiConfig.backendUrl}/api/movies/favorites`,
                { movieId: movie.movieId, movieDetails: movie.movieDetails },
                { headers: { Authorization: token } }
            );

            console.log('Backend response:', data.message);

            if (isAlreadyFavorite) {
                setFavorites((prevFavorites) =>
                    prevFavorites.filter((fav) => fav.movieId !== movie.movieId)
                );
            } else {
                setFavorites((prevFavorites) => [...prevFavorites, movie]);
            }
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {favorites.map((movie) => (
                <MovieCard
                    key={movie.movieId}
                    movie={movie.movieDetails}
                    isFavorite={true}
                    toggleFavorite={toggleFavorite}
                />
            ))}
        </div>
    );
};

export default Favorite;
