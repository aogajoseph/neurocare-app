import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useConfig } from '@/bootstrap/ConfigContext';
import { savePreferences } from '@/auth/auth.api';
import { LanguageCode } from '@/i18n/types';

type SupportedLanguage = {
  code: LanguageCode;
  label: string;
};

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => Promise<void>;
  supported: SupportedLanguage[];
  ready: boolean;
};

const STORAGE_KEY = '@language';

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { config, loading: configLoading } = useConfig();

  const [language, setLanguageState] = useState<LanguageCode>('en');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (configLoading || !config?.i18n) return;

    const initLanguage = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        const supportedCodes = config.i18n.supported.map(
          (l) => l.code as LanguageCode
        );

        if (stored && supportedCodes.includes(stored as LanguageCode)) {
          setLanguageState(stored as LanguageCode);
        } else {
          setLanguageState(config.i18n.default as LanguageCode);
        }
      } catch (e) {
        console.error('Failed to initialize language', e);
        setLanguageState(config.i18n.default as LanguageCode);
      } finally {
        setReady(true);
      }
    };

    initLanguage();
  }, [configLoading, config]);

  const setLanguage = async (code: LanguageCode) => {
    setLanguageState(code);
    await AsyncStorage.setItem(STORAGE_KEY, code);
    await savePreferences({ language: code });
  };

  if (!ready) return null;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        supported: (config?.i18n?.supported || []) as SupportedLanguage[],
        ready,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
