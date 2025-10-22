import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

type ProgressContextType = {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
};

const defaultProgressValue: ProgressContextType = {
  progress: 60,
  setProgress: () => {},
};

const ProgressContext =
  createContext<ProgressContextType>(defaultProgressValue);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState(60);
  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useVideo must be used inside a VideoProvider");
  return context;
};
