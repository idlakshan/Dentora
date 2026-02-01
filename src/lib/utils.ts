import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  return `${base}/boy?username=${username}`;
}

export const formatSriLankaPhone = (value: string) => {
  if (!value) return value;
  const digits = value.replace(/\D/g, "");
  const trimmed = digits.slice(0, 10);

  if (trimmed.length <= 3) {
    return trimmed;
  }

  if (trimmed.length <= 6) {
    return `${trimmed.slice(0, 3)} ${trimmed.slice(3)}`;
  }

  return `${trimmed.slice(0, 3)} ${trimmed.slice(3, 6)} ${trimmed.slice(6)}`;
};
