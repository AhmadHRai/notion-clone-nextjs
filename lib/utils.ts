import { twMerge } from "tailwind-merge";

export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | bigint
  | null
  | boolean
  | undefined;
export type ClassDictionary = Record<string, never>;
export type ClassArray = ClassValue[];

function toVal(
  mix: string | number | bigint | true | ClassArray | ClassDictionary
) {
  let str = "";

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (Array.isArray(mix)) {
    for (const item of mix) {
      if (item) {
        const y = toVal(item);
        if (y) {
          if (str) {
            str += " ";
          }
          str += y;
        }
      }
    }
  } else if (typeof mix === "object") {
    for (const key in mix) {
      if (mix[key]) {
        if (str) {
          str += " ";
        }
        str += key;
      }
    }
  }

  return str;
}
export function clsx(...args: ClassValue[]): string {
  let str = "";

  for (const tmp of args) {
    if (tmp) {
      const x = toVal(tmp);
      if (x) {
        if (str) {
          str += " ";
        }
        str += x;
      }
    }
  }

  return str;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
