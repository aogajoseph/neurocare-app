import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          switch (route.name) {
            case 'index':
              iconName = 'home';
              break;
            case 'assistant':
              iconName = 'chatbubbles-outline';
              break;
            case 'community':
              iconName = 'people-outline';
              break;
            case 'more':
              iconName = 'ellipsis-horizontal';
              break;
            default:
              iconName = 'ellipse-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home '}} />
      <Tabs.Screen name="assistant" options={{ title: 'Assistant' }} />
      <Tabs.Screen name="community" options={{ title: 'Community' }} />
      <Tabs.Screen name="more" options={{ title: 'More', tabBarLabelStyle: { fontWeight: '600' } }} />
    </Tabs>
  );
}
