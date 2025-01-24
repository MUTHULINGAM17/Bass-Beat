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
  DownloadOutlined,
  DesktopOutlined,
  LaptopOutlined,
  ShrinkOutlined,
  ExpandAltOutlined
} from '@ant-design/icons';
import './AudioPlayer.css';
import StarboyImg from './assets/Music photos/Starboy.jpg';


const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(1);
  const [deviceOpen, setDeviceOpen] = useState(false);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);

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

  const handleProgressChange = (e) => {
    setCurrentTime(e.target.value);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setCurrentTime(currentTime);
    const progress = (currentTime / duration) * 100;
    audioRef.current.style.setProperty('--progress', `${progress}%`);
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
            onChange={handleProgressChange}
            style={{ '--progress': `${(currentTime / duration) * 100}%` }}
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
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            style={{ '--volume': `${volume * 100}%` }}
          />
          <PictureOutlined className="control-icon" />
          <ClockCircleOutlined className="control-icon" />
          <DownloadOutlined className="control-icon" />
          <div className="device-control">
            <DesktopOutlined 
              className="control-icon"
              onClick={() => setDeviceOpen(!deviceOpen)}
            />
            {deviceOpen && (
              <div className="device-menu">
                <div className="device-item">
                  <LaptopOutlined /> This Device
                </div>
              </div>
            )}
          </div>
          <div className="mini-player-control">
            {isMiniPlayer ? (
              <ExpandAltOutlined 
                className="control-icon"
                onClick={() => setIsMiniPlayer(false)}
              />
            ) : (
              <ShrinkOutlined 
                className="control-icon"
                onClick={() => setIsMiniPlayer(true)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;