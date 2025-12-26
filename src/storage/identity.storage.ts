// src/storage/identity.storage.ts

import * as SecureStore from 'expo-secure-store';

const ANONYMOUS_USER_KEY = 'neurocare_anonymous_user_id';

/**
 * Save anonymous user ID securely
 */
export async function saveAnonymousUserId(userId: string): Promise<void> {
  await SecureStore.setItemAsync(ANONYMOUS_USER_KEY, userId);
}

/**
 * Load anonymous user ID if it exists
 */
export async function loadAnonymousUserId(): Promise<string | null> {
  const userId = await SecureStore.getItemAsync(ANONYMOUS_USER_KEY);
  return userId ?? null;
}

/**
 * Clear anonymous identity (future logout/reset use)
 */
export async function clearAnonymousUserId(): Promise<void> {
  await SecureStore.deleteItemAsync(ANONYMOUS_USER_KEY);
}
