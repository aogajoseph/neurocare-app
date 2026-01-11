import {
  Animated,
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '@/auth/AuthContext';
import { useEffect, useRef } from 'react';

const MENU_WIDTH = 200;

type Anchor = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export function ProfileMenu({
  visible,
  onClose,
  anchor,
}: {
  visible: boolean;
  onClose: () => void;
  anchor: Anchor | null;
}) {
  const { user, menu } = useAuth();
  const router = useRouter();
  const menuAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;

  const isAnonymous = !user || user.isAnonymous;

  useEffect(() => {
    if (visible) {
      Animated.timing(menuAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(menuAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!visible || !anchor) return null;

  const translateY = menuAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 0],
  });

  // Horizontal alignment: right edge roughly under icon
  const left = Math.min(
    Math.max(anchor.x + anchor.width / 2 - MENU_WIDTH + 12, 8),
    screenWidth - MENU_WIDTH - 8
  );

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
  };

  return (
    <Modal transparent animationType="none">
      <TouchableOpacity
        style={styles.overlay}
        onPress={onClose}
        activeOpacity={1}
      >
        <Animated.View
          style={[
            styles.menu,
            {
              top: anchor.y + anchor.height + 6,
              left,
              opacity: menuAnim,
              transform: [{ translateY }],
            },
          ]}
        >
          {/* ───── User Header ───── */}
          <View style={styles.header}>
            <Text style={styles.name}>
              {isAnonymous ? 'Guest User' : user.name}
            </Text>
            <Text style={styles.email}>
              {isAnonymous ? '@username' : user.email}
            </Text>
          </View>

          <View style={styles.divider} />

          {/* ───── Auth actions (Anonymous only) ───── */}
          {isAnonymous && (
            <View style={styles.section}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => handleNavigate('/(drawer)/(auth)/signup')}
              >
                <Ionicons
                  name="person-add-outline"
                  size={20}
                  color="#2563EB"
                  style={styles.icon}
                />
                <Text style={styles.primaryLabel}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.item}
                onPress={() => handleNavigate('/(drawer)/(auth)/login')}
              >
                <Ionicons
                  name="log-in-outline"
                  size={20}
                  color="#2563EB"
                  style={styles.icon}
                />
                <Text style={styles.primaryLabel}>Sign In</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* ───── Backend-driven menu (Authenticated only) ───── */}
          {!isAnonymous &&
            menu.map((item: any) => (
              <TouchableOpacity
                key={item.id}
                style={styles.item}
                onPress={() =>
                  handleNavigate(`/(drawer)/(tabs)/${item.action.target}`)
                }
              >
                <Ionicons
                  name={item.icon}
                  size={20}
                  color="#111827"
                  style={styles.icon}
                />
                <Text style={styles.label}>{item.label}</Text>
              </TouchableOpacity>
            ))}
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  menu: {
    position: 'absolute',
    width: MENU_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  email: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 8,
  },
  section: {
    paddingVertical: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 12,
  },
  label: {
    fontSize: 15,
    color: '#111827',
  },
  primaryLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563EB',
  },
});
