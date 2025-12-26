import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

/**
 * Primary app hook.
 * Use this everywhere instead of accessing context directly.
 */
export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within AppContextProvider');
  }

  return context;
}
