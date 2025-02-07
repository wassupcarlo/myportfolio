import React, { useState, useRef } from 'react';
import './MyMusic.css';

const beats = [
  { id: 1, title: 'bright lights', collaborators: '@wassupcarlo, @1prod.niko & @brigtaudio_1', audioSrc: '/beats/bright lights (155bpm) [Prod.Niko x WassupCarlo x Brigtaudio_1].mp3' },
  { id: 2, title: 'led', collaborators: '@wassupcarlo, @okayypablo & @1prod.niko', audioSrc: '/beats/led (136bpm) [prod. @1prod.niko x @okayypablo x @wassupcarlo].mp3' },
];

function AudioPlayer({ title, collaborators, audioSrc }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="audio-player">
      <h3>{title}</h3>
      <p>{collaborators}</p>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      />
      <div className="controls">
        <button onClick={togglePlayPause} className="play-pause-btn">
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <div className="progress-container">
          <input
            type="range"
            className="progress-bar"
            value={currentTime}
            max={duration}
            onChange={handleProgressChange}
          />
          <span className="time">{formatTime(currentTime)} / {formatTime(duration)}</span>
        </div>
        <div className="volume-container">
          <span className="volume-icon">🔊</span>
          <input
            type="range"
            className="volume-bar"
            value={volume}
            min="0"
            max="1"
            step="0.01"
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
}

function MyMusic() {
  return (
    <section className="music-section">
      <h2>My Music</h2>
      <section className="outer-section">
        {beats.map((beat) => (
          <AudioPlayer
            key={beat.id}
            title={beat.title}
            collaborators={beat.collaborators}
            audioSrc={beat.audioSrc}
          />
        ))}
      </section>
    </section>
  );
}

export default MyMusic;