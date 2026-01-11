import { createContext, useContext } from 'react';

export type AppConfig = {
  app?: {
    name: string;
    environment: string;
  };
  i18n?: {
    default: string;
    supported: { code: string; label: string }[];
  };
  share?: {
    title: string;
    message: string;
    url: string;
  };
  features?: Record<string, boolean>;
};

type ConfigContextType = {
  config: AppConfig | null;
  loading: boolean;
};

export const ConfigContext = createContext<ConfigContextType>({
  config: null,
  loading: true,
});

export function useConfig() {
  return useContext(ConfigContext);
}
