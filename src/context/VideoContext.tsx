// src/context/VideoContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type VideoContextType = {
  isWide: boolean;
  toggleWide: () => void;
};

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [isWide, setIsWide] = useState(false);

  const toggleWide = () => setIsWide((prev) => !prev);

  return (
    <VideoContext.Provider value={{ isWide, toggleWide }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) throw new Error("useVideo must be used inside a VideoProvider");
  return context;
};
