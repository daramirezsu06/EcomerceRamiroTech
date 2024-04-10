import { CSSProperties, ReactNode } from "react";
export interface FrontProps {
  $image: string;
  children: ReactNode;
}

export interface BackProps {
  children: ReactNode;
}

interface CardFaceProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

interface CategoryContainerProps {
  children: ReactNode;
}
