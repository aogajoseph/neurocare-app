import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useConfig } from '@/src/bootstrap/ConfigContext';
import { useAuth } from '@/src/auth/AuthContext';

type DrawerItem = {
  id: string;
  label: string;
  icon: string;
  action: { type: 'navigate' | 'modal'; target: string };
  authRequired?: boolean;
};

export default function DrawerLayout() {
  const { config } = useConfig();
  const { user } = useAuth();
  const navigation = useNavigation<any>();
  const [items, setItems] = useState<DrawerItem[]>([]);

  const isAnonymous = !user || user.isAnonymous;

  useEffect(() => {
    async function loadDrawer() {
      try {
        const res = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/menu`);
        let menu: DrawerItem[] = res.data.menu || [];

        // Filter items based on auth
        menu = menu.filter((item) => {
          if (item.authRequired && isAnonymous) return false;
          return true;
        });

        setItems(menu);
      } catch (err) {
        console.error('Failed to load drawer menu:', err);
      }
    }
    loadDrawer();
  }, [user]);

  const handleAction = (item: DrawerItem) => {
    if (item.action.type === 'navigate') {
      navigation.navigate(item.action.target);
    } else if (item.action.type === 'modal') {
      console.log('Modal action:', item.action.target);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* ───── Drawer Header ───── */}
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>{config?.app?.name ?? 'NeuroCare'}</Text>
      </View>

      {/* ───── Drawer Menu ───── */}
      <ScrollView style={styles.menuContainer}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => handleAction(item)}
          >
            <Ionicons name={item.icon as any} size={22} color="#aa2078" style={styles.icon} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* ───── Drawer Footer ───── */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>{config?.app?.name ?? 'NeuroCare'}</Text>
        <Text style={styles.footerText}>v1.0.0</Text>
        <Text style={[styles.footerText, { fontSize: 10 }]}>© 2026 NeuroCare Foundation</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#aa2078',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#aa2078',
  },
  menuContainer: {
    flex: 1,
    marginTop: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 16,
  },
  label: {
    fontSize: 16,
    color: '#111827',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#aa2078',
    alignItems: 'flex-start',
  },
  footerText: {
    color: '#6B7280',
    fontSize: 12,
    marginBottom: 2,
  },
});
