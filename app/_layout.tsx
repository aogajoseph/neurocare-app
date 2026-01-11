import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ConfigProvider } from '@/bootstrap/ConfigProvider';
import { HomeProvider } from '@/bootstrap/HomeProvider';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { AuthProvider } from '@/auth/AuthContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ConfigProvider>
        <HomeProvider>
          <LanguageProvider>
            <AuthProvider>
              <Stack screenOptions={{ headerShown: false }} />
            </AuthProvider>
          </LanguageProvider>
        </HomeProvider>
      </ConfigProvider>
    </SafeAreaProvider>
  );
}
