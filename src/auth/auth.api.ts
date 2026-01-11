import axios from 'axios';

const BASE = process.env.EXPO_PUBLIC_BACKEND_URL;

export async function fetchProfile() {
  const res = await axios.get(`${BASE}/api/auth/profile`);
  return res.data;
}

export async function savePreferences(prefs: { language: string }) {
  await axios.post(`${BASE}/api/auth/preferences`, prefs);
}
