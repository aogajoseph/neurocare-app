import { View, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tabs } from 'expo-router/tabs';
import { Ionicons } from '@expo/vector-icons';
import { BrainCog } from 'lucide-react-native';
import AppHeader from '../../components/AppHeader';

export default function TabsLayout() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <AppHeader />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#aa2078',
          tabBarLabelStyle: {
            fontSize: 12,
            textAlign: 'center',
          },
          tabBarStyle: {
            height: 60, // fixed height only
            paddingBottom: Platform.OS === 'ios' ? 8 : 4, // small internal padding
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="community"
          options={{
            title: 'Community',
            tabBarIcon: ({ color }) => <Ionicons name="people" size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="neuro"
          options={{
            title: 'Neuro',
            tabBarIcon: ({ color }) => <BrainCog size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="more"
          options={{ 
            title: 'More',
            tabBarIcon: ({ color }) => <Ionicons name="ellipsis-horizontal" size={22} color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
