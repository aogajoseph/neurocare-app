import React, { createContext, useEffect, useState } from 'react';
import { BootstrapContextValue, BootstrapState } from './bootstrap.types';

import { fetchAppConfig } from '../api/config.api';
import { createAnonymousUser } from '../api/auth.api';
import {
  fetchPreferences,
  updatePreferences,
} from '../api/preferences.api';

import {
  loadAnonymousUserId,
  saveAnonymousUserId,
} from '../storage/identity.storage';

import { applyLanguage } from '../i18n/language';

export const AppBootstrapContext =
  createContext<BootstrapContextValue | null>(null);

const initialState: BootstrapState = {
  ready: false,
  loading: true,
  config: null,
  user: null,
  preferences: null,
};

export function AppBootstrapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<BootstrapState>(initialState);

  /**
   * Main bootstrap sequence
   */
  const bootstrap = async () => {
    try {
      setState((s) => ({ ...s, loading: true, error: undefined }));

      // 1️⃣ Load app config
      const config = await fetchAppConfig();

      // 2️⃣ Restore or create anonymous user
      let userId = await loadAnonymousUserId();
      let user;

      if (!userId) {
        user = await createAnonymousUser();
        await saveAnonymousUserId(user.userId);
      } else {
        user = { userId, role: 'anonymous', createdAt: '' };
      }

      // 3️⃣ Load preferences
      const preferences = await fetchPreferences(user.userId);

      // 4️⃣ Apply language
      if (preferences?.language) {
        applyLanguage(preferences.language);
      }

      // 5️⃣ Finalize
      setState({
        ready: true,
        loading: false,
        config,
        user,
        preferences,
      });
    } catch (error: any) {
      console.error('Bootstrap failed:', error);
      setState((s) => ({
        ...s,
        loading: false,
        error: 'Failed to initialize app',
      }));
    }
  };

  /**
   * Change language + persist preference
   */
  const setLanguage = async (language: string) => {
    if (!state.user) return;

    applyLanguage(language);

    const updated = await updatePreferences(state.user.userId, {
      language,
    });

    setState((s) => ({
      ...s,
      preferences: updated,
    }));
  };

  useEffect(() => {
    bootstrap();
  }, []);

  const value: BootstrapContextValue = {
    state,
    reload: bootstrap,
    setLanguage,
  };

  return (
    <AppBootstrapContext.Provider value={value}>
      {children}
    </AppBootstrapContext.Provider>
  );
}
