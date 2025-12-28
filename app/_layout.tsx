import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ConfigProvider } from '@/src/bootstrap/ConfigProvider';
import { LanguageProvider } from '@/src/i18n/LanguageContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ConfigProvider>
        <LanguageProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </LanguageProvider>
      </ConfigProvider>
    </SafeAreaProvider>
  );
}
