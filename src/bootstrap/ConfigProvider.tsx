import { useEffect, useState } from 'react';
import { ConfigContext, AppConfig } from './ConfigContext';
import { LanguageProvider } from '@/i18n/LanguageContext';

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadConfig() {
      try {
        const res = await fetch(
          `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/config`
        );
        const data = await res.json();
        setConfig(data);
      } catch (err) {
        console.error('Failed to load config', err);
      } finally {
        setLoading(false);
      }
    }

    loadConfig();
  }, []);

  return (
    <ConfigContext.Provider value={{ config, loading }}>
      <LanguageProvider>{children}</LanguageProvider>
    </ConfigContext.Provider>
  );
}
