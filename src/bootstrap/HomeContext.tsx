import { createContext, useContext } from 'react';

export type HomeData = any; // you can strongly type later

type HomeContextType = {
  home: HomeData | null;
  loading: boolean;
};

export const HomeContext = createContext<HomeContextType>({
  home: null,
  loading: true,
});

export function useHome() {
  return useContext(HomeContext);
}
