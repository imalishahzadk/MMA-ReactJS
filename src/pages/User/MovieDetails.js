import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "./VideoPlayer"; 
import apiConfig from "../../config";
const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `${apiConfig.backendUrl}/api/movies/movies/${movieId}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie detail:", error);
        setMovie(null);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (!movie) return <div className="text-center text-xl font-semibold">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        {/* Movie Poster */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={movie.artworkUrl100}
            alt={movie.trackName}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-6 md:mt-0 flex-1">
          <h1 className="text-4xl font-semibold text-gray-800">{movie.trackName}</h1>
          <p className="text-sm text-gray-500">Released: {movie.releaseDate}</p>
          <div className="mt-4 text-lg text-gray-700">
            <p><strong>Director:</strong> {movie.artistName}</p>
            <p><strong>Genre:</strong> {movie.primaryGenreName}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-medium text-gray-800">Preview</h2>
            <div className="mt-4">
              <VideoPlayer videoSrc={movie.previewUrl} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          className="px-6 py-2 bg-gradient-to-r from-gray-700 to-black-500 text-white font-semibold rounded-lg shadow-md hover:bg-grey-700 transition-all"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
