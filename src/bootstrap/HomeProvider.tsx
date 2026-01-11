import { useEffect, useState } from 'react';
import { HomeContext, HomeData } from './HomeContext';

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const [home, setHome] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHome() {
      try {
        const res = await fetch(
          `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/home`
        );

        const data = await res.json();
        setHome(data);
      } catch (err) {
        console.error('Failed to load home', err);
      } finally {
        setLoading(false);
      }
    }

    loadHome();
  }, []);

  return (
    <HomeContext.Provider value={{ home, loading }}>
      {children}
    </HomeContext.Provider>
  );
}
