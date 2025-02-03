import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names or class value objects into a single string.
 * This function uses clsx to combine classes and twMerge to handle Tailwind CSS conflicts.
 *
 * @param inputs - An array of class names or class value objects
 * @returns A string of combined class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
