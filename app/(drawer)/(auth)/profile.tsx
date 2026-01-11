import { View, Text, ActivityIndicator } from 'react-native';
import { useAuth } from '@/auth/AuthContext';

export default function ProfileScreen() {
  const { user, loading } = useAuth();

  if (loading) return <ActivityIndicator />;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>Profile</Text>

      <Text>Name: {user.name ?? 'Anonymous'}</Text>
      <Text>Email: {user.email ?? '—'}</Text>
      <Text>Status: {user.isAnonymous ? 'Guest' : 'Signed in'}</Text>
    </View>
  );
}
