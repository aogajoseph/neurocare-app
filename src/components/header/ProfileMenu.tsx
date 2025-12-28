import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useAuth } from '@/src/auth/AuthContext';

export function ProfileMenu({ visible, onClose }: any) {
  const { user, menu } = useAuth();
  const navigation = useNavigation<any>();

  const handleAction = (item: any) => {
    onClose();
    switch (item.action.type) {
      case 'navigate':
        navigation.push(item.action.target);
        break;
      case 'modal':
        if (item.action.target === 'language') {
          navigation.push('language');
        }
        break;
    }
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.menu}>
          {/* User info */}
          <View style={styles.header}>
            <Text style={styles.name}>{user?.name ?? 'Guest User'}</Text>
            <Text style={styles.email}>{user?.email ?? 'Guest account'}</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Sign Up / Sign In Links */}
          {!user?.id && (
            <View style={styles.authLinks}>
              <TouchableOpacity
                style={styles.authItem}
                onPress={() => {
                  onClose();
                  navigation.push('auth/signup'); // create signup screen
                }}
              >
                <Text style={styles.authText}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.authItem}
                onPress={() => {
                  onClose();
                  navigation.push('auth/login');
                }}
              >
                <Text style={styles.authText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Menu items from backend */}
          {menu.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() => handleAction(item)}
            >
              <Ionicons name={item.icon} size={20} style={{ marginRight: 8 }} />
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
    paddingTop: 70,
    paddingRight: 16,
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    width: 220,
  },
  header: {
    marginBottom: 8,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  email: {
    color: '#6B7280',
    fontSize: 14,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginVertical: 8,
  },
  authLinks: {
    marginBottom: 8,
  },
  authItem: {
    paddingVertical: 6,
  },
  authText: {
    color: '#2563EB',
    fontWeight: '500',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
  },
});
