import { Stack } from 'expo-router';
import { ConfigProvider } from '@/src/bootstrap/ConfigProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ConfigProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ConfigProvider>
    </SafeAreaProvider>
  );
}
