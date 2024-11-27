import React, { useRef, useState } from "react";

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto bg-gray-900 p-4 rounded-lg shadow-lg sm:p-6 lg:p-8">
      <div className="relative w-full">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full rounded-lg"
          controls={false}
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={togglePlayPause}
          className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none w-full sm:w-auto"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        {/* volume Control */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
          <label htmlFor="volume" className="text-gray-300">
            Volume
          </label>
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full sm:w-24"
          />
        </div>

        {/* fullscreen Button */}
        <button
          onClick={handleFullScreen}
          className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 focus:outline-none w-full sm:w-auto"
        >
          Fullscreen
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
