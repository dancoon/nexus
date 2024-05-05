import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function errorParse(obj: Record<string, string[]>): string {
  return Object.values(obj).flat().join(", ");
}
