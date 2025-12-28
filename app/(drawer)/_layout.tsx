import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false, // 🔥 critical
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{ drawerLabel: 'Home' }}
      />
    </Drawer>
  );
}
