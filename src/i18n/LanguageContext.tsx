import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useConfig } from '@/src/bootstrap/ConfigContext';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  supported: { code: string; label: string }[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { config, loading } = useConfig();
  const [language, setLanguageState] = useState<string>(config?.i18n?.default || 'en');

  // Load stored language from AsyncStorage on mount
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem('@language');
        if (stored) setLanguageState(stored);
      } catch (e) {
        console.error('Failed to load language from storage', e);
      }
    })();
  }, []);

  const setLanguage = async (lang: string) => {
    setLanguageState(lang);
    try {
      await AsyncStorage.setItem('@language', lang);
    } catch (e) {
      console.error('Failed to save language', e);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        supported: config?.i18n?.supported || [],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
