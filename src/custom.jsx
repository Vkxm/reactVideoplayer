import React, { useState, useRef } from 'react';

const CustomVideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // Play/Pause Toggle
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress bar as the video plays
  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

  // Seek through the video
  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  // Volume Control
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // Mute/Unmute Toggle
  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={videoSrc}
        onTimeUpdate={handleTimeUpdate}
        width="100%"
        controls={false}
      />
      <div className="controls">
        {/* Play/Pause Button */}
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>

        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
        />

        {/* Volume Control */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />

        {/* Mute/Unmute Button */}
        <button onClick={toggleMute}>
          {isMuted ? "Unmute" : "Mute"}
        </button>

        {/* Fullscreen Button */}
        <button onClick={toggleFullscreen}>Fullscreen</button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;