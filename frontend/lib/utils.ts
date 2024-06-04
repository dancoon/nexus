import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { load } from "cheerio";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function errorParse(obj: Record<string, string[]>): string {
  return Object.values(obj).flat().join(", ");
}

export function extractTextFromHTML(htmlString: string): string {
  if (typeof htmlString !== "string") {
    throw new Error("Invalid input: htmlString must be a string");
  }

  const $ = load(htmlString);
  const text = $("body").text().trim();
  return text;
}

export function shortenString(str: string, maxLength = 200) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
}