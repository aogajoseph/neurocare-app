// src/api/config.api.ts

import { apiClient } from './client';

export type AppLanguage = {
  code: string;           // e.g. "en", "sw", "fr"
  label: string;          // e.g. "English"
  region?: string;        // e.g. "US", "GB"
  isDefault?: boolean;
};

export type AppConfig = {
  appName: string;
  supportedLanguages: AppLanguage[];
  features: {
    community: boolean;
    assistant: boolean;
    donations: boolean;
  };
};

export async function fetchAppConfig(): Promise<AppConfig> {
  const response = await apiClient.get('/api/config');
  return response.data;
}
