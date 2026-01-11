import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useLanguage } from '@/i18n/LanguageContext';
import { uiCopy } from '@/i18n/ui';

export function ScreenLoader() {
  const { language } = useLanguage();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" />
      <Text style={styles.text}>
        {uiCopy.loading[language]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 8,
    fontSize: 13,
    color: '#6B7280',
  },
});
