// src/app/_layout.tsx
import { Slot } from "expo-router";
import { ActivityIndicator, View } from "react-native";

import { AppBootstrapProvider } from "../bootstrap/AppBootstrapProvider";
import { useApp } from "../bootstrap/useApp";

function AppGate() {
  const { ready } = useApp();

  // Block UI until bootstrap is complete
  if (!ready) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Once ready, render the app
  return <Slot />;
}

export default function RootLayout() {
  return (
    <AppBootstrapProvider>
      <AppGate />
    </AppBootstrapProvider>
  );
}
