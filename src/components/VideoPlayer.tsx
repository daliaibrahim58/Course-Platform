"use client";

import React, { useRef, useState } from "react";
import {
  IoPause,
  IoPlay,
  IoExpandOutline,
  IoResizeOutline,
} from "react-icons/io5";
import { useVideo } from "@/context/VideoContext";

type VideoPlayerProps = {
  src: string;
  poster?: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
  const {isWide, toggleWide} = useVideo()
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleFullScreen  = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };



  return (
    <div
      className={`relative bg-black overflow-hidden ${
        isWide ? " w-[93.38vw] md:h-[80vh] z-50" : "w-full"
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        onClick={togglePlay}
         onDoubleClick={toggleFullScreen}
        loop
      />

      {/* Play/Pause Button */}
      {(isHover || !isPlaying) && (
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     bg-white rounded-full w-[70px] h-[70px] flex items-center 
                     justify-center shadow-md"
        >
          {isPlaying ? (
            <IoPause size={28} color="orange" />
          ) : (
            <IoPlay size={28} color="orange" />
          )}
        </button>
      )}

      {/* Control buttons */}
      <div className="absolute bottom-4 right-4 flex gap-3">
        <button
          onClick={toggleWide}
          className="bg-gray-800/60 text-white p-2 rounded-md hover:bg-gray-700"
          title="Wide Mode"
        >
          <IoResizeOutline size={20} />
        </button>
        <button
          onClick={toggleFullScreen}
          className="bg-gray-800/60 text-white p-2 rounded-md hover:bg-gray-700"
          title="Fullscreen"
        >
          <IoExpandOutline size={20} />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
