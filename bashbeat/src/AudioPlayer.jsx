import React, { useState, useRef } from 'react';
import {
  RetweetOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  PlayCircleFilled,
  PauseCircleFilled,
  SoundOutlined,
  HistoryOutlined,
  PictureOutlined,
  ClockCircleOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import './AudioPlayer.css';
import StarboyImg from './assets/Music photos/Starboy.jpg';


const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const currentSong = {
    title: "Starboy",
    artist: "The Weeknd",
    coverUrl: StarboyImg // Add your image path here
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded && (
        <div className="overlay" onClick={() => setIsExpanded(false)}>
          <div 
            className="expanded-cover-container"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentSong.coverUrl} 
              alt="Album Cover" 
              className="expanded-cover"
            />
            <div className="expanded-song-details">
              <div className="expanded-title">{currentSong.title}</div>
              <div className="expanded-artist">{currentSong.artist}</div>
            </div>
          </div>
        </div>
      )}
      <div className="player-container">
        {/* Song Info */}
        <div className="song-info">
          <img 
            src={currentSong.coverUrl} 
            alt="Album Cover" 
            className="song-cover"
            onClick={handleImageClick}
            onError={(e) => {
              e.target.src = '/images/default-cover.jpg';
              e.target.onerror = null;
            }}
          />
          <div className="song-details">
            <span className="song-title">{currentSong.title}</span>
            <span className="song-artist">{currentSong.artist}</span>
          </div>
        </div>

        {/* Timeline slider */}
        <div className="timeline-container">
          <span className="time-current">{formatTime(currentTime)}</span>
          <input
            type="range"
            className="timeline-slider"
            value={currentTime}
            max={duration}
            onChange={(e) => setCurrentTime(e.target.value)}
          />
          <span className="time-total">{formatTime(duration)}</span>
        </div>

        {/* Main controls */}
        <div className="controls-container">
          <div className="left-controls">
            <RetweetOutlined className="control-icon" />
          </div>

          <div className="center-controls">
            <StepBackwardOutlined className="control-icon" />
            <div className="play-button" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <PauseCircleFilled /> : <PlayCircleFilled />}
            </div>
            <StepForwardOutlined className="control-icon" />
          </div>

          <div className="right-controls">
            <HistoryOutlined className="control-icon" />
          </div>
        </div>

        {/* Right side controls */}
        <div className="additional-controls">
          <SoundOutlined className="control-icon" />
          <input
            type="range"
            className="volume-slider"
            min="0"
            max="100"
            defaultValue="100"
          />
          <PictureOutlined className="control-icon" />
          <ClockCircleOutlined className="control-icon" />
          <DownloadOutlined className="control-icon" />
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;