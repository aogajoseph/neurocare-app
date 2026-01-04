import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '@/src/components/drawer/CustomDrawerContent';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* 🔥 ONE SCREEN ONLY */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
        }}
      />
    </Drawer>
  );
}
