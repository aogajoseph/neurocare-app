import { useEffect, useState } from 'react';
import axios from 'axios';
import Constants from 'expo-constants';

export function useApp() {
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function bootstrap() {
      try {
        const backendUrl =
          Constants.expoConfig?.extra?.EXPO_PUBLIC_BACKEND_URL;

        if (!backendUrl) {
          throw new Error('Missing EXPO_PUBLIC_BACKEND_URL');
        }

        const res = await axios.get(`${backendUrl}/api/config`);
        setConfig(res.data);
      } catch (err: any) {
        console.error('Bootstrap failed:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    bootstrap();
  }, []);

  return { config, loading, error };
}
