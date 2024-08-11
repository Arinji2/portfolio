"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type InfoContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const InfoContext = createContext<InfoContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export function useInfoContext() {
  return useContext(InfoContext);
}

export function InfoContextWrapper({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <InfoContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </InfoContext.Provider>
  );
}

type GlobalInfoContextType = {
  focusedIndex: number;
  setFocusedIndex: Dispatch<SetStateAction<number>>;
};
export const GlobalInfoContext = createContext<GlobalInfoContextType>({
  focusedIndex: 0,
  setFocusedIndex: () => {},
});
export function useGlobalInfoContext() {
  return useContext(GlobalInfoContext);
}

export function GlobalInfoContextWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [focusedIndex, setFocusedIndex] = useState(0);

  return (
    <GlobalInfoContext.Provider value={{ focusedIndex, setFocusedIndex }}>
      {children}
    </GlobalInfoContext.Provider>
  );
}
