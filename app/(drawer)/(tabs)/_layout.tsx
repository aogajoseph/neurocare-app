import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router/tabs';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../../components/AppHeader';

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      {/* ✅ ONE header, rendered ONCE */}
      <AppHeader />

      {/* ✅ Tabs remain navigation root */}
      <Tabs
        screenOptions={{
          headerShown: false, // 🔴 prevent Tabs header
          tabBarActiveTintColor: '#2563EB',
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="community"
          options={{
            title: 'Community',
            tabBarIcon: ({ color }) => (
              <Ionicons name="people" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="neuro"
          options={{
            title: 'Neuro',
            tabBarIcon: ({ color }) => (
              <Ionicons name="brain" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: 'More',
            tabBarIcon: ({ color }) => (
              <Ionicons name="ellipsis-horizontal" size={22} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
