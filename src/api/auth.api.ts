// src/api/auth.api.ts

import { apiClient } from './client';

export type AnonymousUser = {
  userId: string;
  role: 'anonymous';
  createdAt: string;
};

export async function createAnonymousUser(): Promise<AnonymousUser> {
  const response = await apiClient.post('/api/auth/anonymous');
  return response.data;
}
