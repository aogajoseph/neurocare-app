import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useConfig } from '@/bootstrap/ConfigContext';

export default function CustomDrawerContent(props: any) {
  const { config } = useConfig();
  const insets = useSafeAreaInsets();
  const [expanded, setExpanded] = useState<string | null>(null);

  const sections = Array.isArray(config?.drawer?.sections)
    ? config.drawer.sections
    : [];

  const toggle = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <View style={[styles.root, { paddingBottom: insets.bottom }]}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.scroll}>
        {/* ───── Logo ───── */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* ───── Sections ───── */}
        {sections.map((section: any) => {
          const isOpen = expanded === section.id;

          return (
            <View key={section.id} style={styles.section}>
              {/* Section Header */}
              <TouchableOpacity
                style={styles.sectionHeader}
                onPress={() => toggle(section.id)}
              >
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Ionicons
                  name={isOpen ? 'chevron-up' : 'chevron-down'}
                  size={18}
                  color="#000000"
                />
              </TouchableOpacity>

              {/* Sub-items */}
              {isOpen &&
                section.items.map((item: any) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.item}
                    onPress={() => {
                      props.navigation.closeDrawer();
                      router.push(`/${item.target}`);
                    }}
                  >
                    <Ionicons
                      name={item.icon}
                      size={18}
                      color="#374151"
                      style={styles.itemIcon}
                    />
                    <Text style={styles.itemLabel}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
            </View>
          );
        })}
      </DrawerContentScrollView>

      {/* ───── Footer (Safe Area aware) ───── */}
      <View style={[styles.footer, { paddingBottom: insets.bottom || 12 }]}>
        <Text style={styles.footerTitle}>Neuro Care</Text>
        <Text style={styles.footerText}>Version 1.0.0</Text>
        <Text style={styles.footerText}>
          ©{new Date().getFullYear()} Neuro Care Foundation
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    paddingBottom: 16,
  },
  logoContainer: {
    paddingHorizontal: 0,
    paddingVertical: 20,
    alignItems: 'flex-start',
  },
  logo: {
    width: 180, // slightly bigger
    height: 98,
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 28,
    paddingRight: 16,
  },
  itemIcon: {
    marginRight: 10,
    color: '#aa2078'
  },
  itemLabel: {
    fontSize: 14,
    color: '#374151',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  footerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#aa2078',
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
});
