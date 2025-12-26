// src/bootstrap/bootstrap.types.ts

import { AppConfig } from '../api/config.api';
import { AnonymousUser } from '../api/auth.api';
import { UserPreferences } from '../api/preferences.api';

/**
 * Overall bootstrap state
 */
export type BootstrapState = {
  ready: boolean;
  loading: boolean;
  error?: string;

  config: AppConfig | null;
  user: AnonymousUser | null;
  preferences: UserPreferences | null;
};

/**
 * What the Bootstrap Provider exposes
 */
export type BootstrapContextValue = {
  state: BootstrapState;

  // actions
  reload: () => Promise<void>;
  setLanguage: (language: string) => Promise<void>;
};
