import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { useConfig } from '@/src/bootstrap/ConfigContext';
import { useLanguage } from '@/src/i18n/LanguageContext';
import { LanguageMenu } from '@/src/components/header/LanguageMenu';
import { ProfileMenu } from '@/src/components/header/ProfileMenu';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AppHeader() {
  const navigation = useNavigation<any>();
  const { config, loading } = useConfig();
  const { language, setLanguage, supported } = useLanguage();
  const [showLang, setShowLang] = useState(false);
  const insets = useSafeAreaInsets();
  const [showProfile, setShowProfile] = useState(false);
  const user = { name: 'John Doe', email: 'john@example.com' }; // fetch from backend/auth


  if (loading) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <ActivityIndicator size="small" color="#2563EB" />
      </View>
    );
  }

  const handleShare = async () => {
    if (!config?.share) return;
    try {
      await Share.share({
        title: config.share.title,
        message: `${config.share.message}\n${config.share.url}`,
      });
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  const handleProfile = () => {
    navigation.navigate('profile'); // assumes a profile screen exists
  };

  return (
    <View style={[styles.wrapper, { paddingTop: insets.top }]}>
      <View style={styles.container}>
        {/* LEFT */}
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={26} color="#111827" />
          </TouchableOpacity>
          <Text style={styles.title}>
            {config?.app?.name ?? 'NeuroCare'} ({language.toUpperCase()})
          </Text>
        </View>

        {/* RIGHT */}
        <View style={styles.actions}>
          {/* Language */}
          <TouchableOpacity onPress={() => setShowLang(true)}>
            <Ionicons name="language-outline" size={22} color="#111827" />
          </TouchableOpacity>

          <LanguageMenu
            visible={showLang}
            onClose={() => setShowLang(false)}
            languages={supported}
            onSelect={(code: string) => setLanguage(code)}
          />

          {/* Share */}
          <TouchableOpacity onPress={handleShare}>
            <Ionicons name="share-social-outline" size={22} color="#111827" />
          </TouchableOpacity>

          {/* Profile */}
          <TouchableOpacity onPress={() => setShowProfile(true)}>
            <Ionicons name="person-circle-outline" size={26} />
          </TouchableOpacity>

          <ProfileMenu
            visible={showProfile}
            onClose={() => setShowProfile(false)}
          />
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
