import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import logo from '@/assets/images/logo.png';
import { useConfig } from '@/src/config/ConfigContext';

const BRAND_COLOR = '#aa2078';

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const { config } = useConfig();

  const sections = config?.drawer?.sections ?? [];
  const version = config?.app?.version ?? '1.0.0';
  const year = new Date().getFullYear();

  const handleNavigate = (target: string) => {
    props.navigation.closeDrawer();
    router.push(`/(drawer)/(content)/${target}`);
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      {/* ───── Logo Header ───── */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>

      {/* ───── Dynamic Sections ───── */}
      <ScrollView>
        {sections.map((section: any) => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>

            {section.items.map((item: any) => (
              <TouchableOpacity
                key={item.id}
                style={styles.item}
                onPress={() => handleNavigate(item.target)}
              >
                <Ionicons
                  name={item.icon}
                  size={20}
                  color={BRAND_COLOR}
                  style={styles.icon}
                />
                <Text style={styles.label}>{item.label}</Text>
              </TouchableOpacity>
            ))}

            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>

      {/* ───── Footer ───── */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Neuro Care</Text>
        <Text style={styles.footerText}>Version {version}</Text>
        <Text style={styles.footerText}>
          © {year} Neuro Care Foundation
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 16,
  },

  /* Logo */
  logoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'flex-start',
  },
  logo: {
    width: 140,
    height: 48,
  },

  /* Sections */
  section: {
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginLeft: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  icon: {
    marginRight: 14,
  },
  label: {
    fontSize: 15,
    color: '#111827',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },

  /* Footer */
  footer: {
    marginTop: 'auto',
    paddingTop: 16,
    paddingHorizontal: 20,
  },
  footerTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  footerText: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 2,
  },
});
