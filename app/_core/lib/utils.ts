import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidCPF(cpf: string): boolean {
  const cpfRegex = /^\d{11}$/;
  if (!cpfRegex.test(cpf)) return false;

  if (/^(\d)\1+$/.test(cpf)) return false;

  const digits = cpf.split("").map(Number);
  const calcCheckDigit = (slice: number, weightStart: number) =>
      ((digits
          .slice(0, slice)
          .reduce((acc, digit, i) => acc + digit * (weightStart - i), 0) * 10) %
          11) %
      10;

  const d1 = calcCheckDigit(9, 10);
  const d2 = calcCheckDigit(10, 11);

  return d1 === digits[9] && d2 === digits[10];
}