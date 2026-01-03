import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '@/src/auth/AuthContext';

export function ProfileMenu({ visible, onClose }: any) {
  const { user, menu } = useAuth();
  const router = useRouter();

  const isAnonymous = !user || user.isAnonymous;

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.menu}>
          {/* ───── User Header ───── */}
          <View style={styles.header}>
            <Text style={styles.name}>
              {isAnonymous ? 'Guest User' : user.name}
            </Text>
            <Text style={styles.email}>
              {isAnonymous ? '@username' : user.email}
            </Text>
          </View>

          {/* Divider */}
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
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 72,
    paddingRight: 16,
  },
  menu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 12,
    width: 240,
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
