import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

/** sometimes Submit button doesn't need handler */

export interface CustomManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
