import React from "react";


export interface IButtonProps {
  children: React.ReactNode;
  handrenClick: React.MouseEventHandler<HTMLButtonElement>;
}