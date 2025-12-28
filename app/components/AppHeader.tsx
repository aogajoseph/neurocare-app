import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { useConfig } from '@/src/bootstrap/ConfigContext';
import { LanguageMenu } from '@/src/components/header/LanguageMenu';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AppHeader() {
  const navigation = useNavigation<any>();
  const { config, loading } = useConfig();
  const [showLang, setShowLang] = useState(false);
  const insets = useSafeAreaInsets(); // ✅ key fix

  if (loading) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <ActivityIndicator size="small" color="#2563EB" />
      </View>
    );
  }

  return (
    <View style={[styles.wrapper, { paddingTop: insets.top }]}>
      <View style={styles.container}>
        {/* LEFT */}
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={26} color="#111827" />
          </TouchableOpacity>

          <Text style={styles.title}>{config?.app?.name ?? 'NeuroCare'}</Text>
        </View>

        {/* RIGHT */}
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => setShowLang(true)}>
            <Ionicons name="language-outline" size={22} color="#111827" />
          </TouchableOpacity>

          <LanguageMenu
            visible={showLang}
            onClose={() => setShowLang(false)}
            languages={config?.i18n?.supported || []}
            onSelect={(code: string) => console.log('Language:', code)}
          />

          <TouchableOpacity
            onPress={async () => {
              if (!config?.share) return;
              await Share.share({
                title: config.share.title,
                message: `${config.share.message}\n${config.share.url}`,
              });
            }}
          >
            <Ionicons name="share-social-outline" size={22} color="#111827" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Ionicons name="person-circle-outline" size={26} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
  },
});
