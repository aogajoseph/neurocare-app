import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ConfigProvider } from '@/src/bootstrap/ConfigProvider';
import { LanguageProvider } from '@/src/i18n/LanguageContext';
import { AuthProvider } from '@/src/auth/AuthContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ConfigProvider>
        <LanguageProvider>
          <AuthProvider>
            <Stack screenOptions={{ headerShown: false }} />
          </AuthProvider>
        </LanguageProvider>
      </ConfigProvider>
    </SafeAreaProvider>
  );
}
