// Source - https://stackoverflow.com/q/78567007
// Posted by houra-dev
// Retrieved 2026-02-28, License - CC BY-SA 4.0

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
