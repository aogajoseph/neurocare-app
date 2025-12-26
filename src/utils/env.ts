// src/utils/env.ts

export const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

if (!BACKEND_URL) {
  throw new Error(
    'EXPO_PUBLIC_BACKEND_URL is not defined. Check your env variables.'
  );
}
