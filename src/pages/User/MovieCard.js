import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


const MovieCard = ({ movie, toggleFavorite, isFavorite, isGridView }) => {
    const navigate = useNavigate(); 

    return (
        <div
            className={`border p-4 rounded shadow ${
                isGridView ? '' : 'flex items-center space-x-4'
            }`}
            onClick={() => navigate(`/dashboard/user/movies/${movie.trackId}`)} 
            style={{ cursor: 'pointer' }} 
        >
            <img
                src={movie.artworkUrl100 || 'https://via.placeholder.com/150'}
                alt={movie.trackName || 'No Title'}
                className={`rounded ${isGridView ? 'w-full mb-2' : 'w-24 h-24'}`}
            />
            <div className={isGridView ? '' : 'flex-1'}>
                <h2 className="text-lg font-bold">{movie.trackName || 'Untitled Movie'}</h2>
                <p className="text-sm">{movie.primaryGenreName || 'Unknown Genre'}</p>
                <p className="text-sm">Price: ${movie.trackPrice || 'N/A'}</p>
                <button
                    onClick={(e) => {
                        e.stopPropagation(); 
                        toggleFavorite(movie);
                    }}
                    className="mt-2"
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    {isFavorite ? (
                        <AiFillHeart className="text-red-500 text-xl" />
                    ) : (
                        <AiOutlineHeart className="text-gray-500 text-xl" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default MovieCard;