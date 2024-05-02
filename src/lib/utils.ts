import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const randomColor = (opacity: number = 1): { colorWithOpacity: string, colorWithoutOpacity: string } => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return {
    colorWithOpacity: `rgba(${red}, ${green}, ${blue}, ${opacity})`,
    colorWithoutOpacity: `rgb(${red}, ${green}, ${blue})`
  }
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD' 
})