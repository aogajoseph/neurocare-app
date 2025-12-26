import React, { createContext, useContext } from 'react';
import { AppBootstrapContext } from '../bootstrap/AppBootstrapProvider';
import { AppConfig } from '../api/config.api';
import { AnonymousUser } from '../api/auth.api';
import { UserPreferences } from '../api/preferences.api';

type AppContextValue = {
  ready: boolean;
  loading: boolean;
  error?: string;

  config: AppConfig | null;
  user: AnonymousUser | null;
  preferences: UserPreferences | null;

  setLanguage: (language: string) => Promise<void>;
  reloadApp: () => Promise<void>;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const bootstrap = useContext(AppBootstrapContext);

  if (!bootstrap) {
    throw new Error(
      'AppContextProvider must be used inside AppBootstrapProvider'
    );
  }

  const { state, setLanguage, reload } = bootstrap;

  const value: AppContextValue = {
    ready: state.ready,
    loading: state.loading,
    error: state.error,

    config: state.config,
    user: state.user,
    preferences: state.preferences,

    setLanguage,
    reloadApp: reload,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
