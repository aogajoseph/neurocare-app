// src/api/preferences.api.ts

import { apiClient } from './client';

export type UserPreferences = {
  language: string;
  theme?: 'light' | 'dark';
};

export async function fetchPreferences(
  userId: string
): Promise<UserPreferences> {
  const response = await apiClient.get('/api/auth/preferences', {
    params: { userId },
  });
  return response.data;
}

export async function updatePreferences(
  userId: string,
  preferences: Partial<UserPreferences>
): Promise<UserPreferences> {
  const response = await apiClient.post('/api/auth/preferences', {
    userId,
    preferences,
  });
  return response.data;
}
