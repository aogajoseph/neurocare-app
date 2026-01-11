import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useState, useRef } from 'react';
import { useConfig } from '@/bootstrap/ConfigContext';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageMenu } from '@/components/header/LanguageMenu';
import { ProfileMenu } from '@/components/header/ProfileMenu';

export default function AppHeader() {
  const navigation = useNavigation<any>();
  const { config, loading } = useConfig();
  const { language, setLanguage, supported } = useLanguage();

  // Profile menu
  const [showProfile, setShowProfile] = useState(false);
  const [profileAnchor, setProfileAnchor] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const profileRef = useRef<TouchableOpacity>(null);

  // Language menu
  const [showLang, setShowLang] = useState(false);
  const [langAnchor, setLangAnchor] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const langRef = useRef<TouchableOpacity>(null);

  const user = { name: 'John Doe', email: 'john@example.com' }; // fetch from backend/auth

  if (loading) {
    return (
      <View style={styles.container}>
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

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* LEFT */}
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>{config?.app?.name ?? 'NeuroCare'}</Text>
        </View>

        {/* RIGHT */}
        <View style={styles.actions}>
          {/* Language */}
          <TouchableOpacity
            ref={langRef}
            onPress={() => {
              langRef.current?.measureInWindow((x, y, width, height) => {
                setLangAnchor({ x, y, width, height });
                setShowLang(true);
              });
            }}
          >
            <Ionicons name="language-outline" size={22} color="#111827" />
          </TouchableOpacity>

          <LanguageMenu
            visible={showLang}
            onClose={() => setShowLang(false)}
            languages={supported}
            selected={language}
            onSelect={(code: string) => setLanguage(code)}
            anchor={langAnchor}
          />

          {/* Share */}
          <TouchableOpacity onPress={handleShare}>
            <Ionicons name="share-social-outline" size={22} color="#111827" />
          </TouchableOpacity>

          {/* Profile */}
          <TouchableOpacity
            ref={profileRef}
            onPress={() => {
              profileRef.current?.measureInWindow((x, y, width, height) => {
                setProfileAnchor({ x, y, width, height });
                setShowProfile(true);
              });
            }}
          >
            <Ionicons name="person-circle-outline" size={26} color="#111827" />
          </TouchableOpacity>

          <ProfileMenu
            visible={showProfile}
            onClose={() => setShowProfile(false)}
            anchor={profileAnchor}
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
    color: '#000',
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
  },
});
