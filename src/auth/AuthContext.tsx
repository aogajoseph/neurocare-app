import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchProfile } from './auth.api';

export type ProfileMenuItem = {
  id: string;
  label: string;
  icon: string;
  action: {
    type: 'navigate' | 'modal';
    target: string;
  };
};

export type AuthUser = {
  id: string;
  name: string;
  email: string | null;
  isAnonymous: boolean;
};

type AuthState = {
  user: AuthUser | null;
  menu: ProfileMenuItem[];
  loading: boolean;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null); // ✅ MISSING STATE
  const [menu, setMenu] = useState<ProfileMenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const res = await fetchProfile();
        setUser(res.user);
        setMenu(res.menu || []);
      } catch (e) {
        console.error('Failed to load profile', e);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, menu, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return ctx;
}
