import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function LoginLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Login", headerShown: false }}
        />
      </Stack>
      <StatusBar style={"light"} />
    </SafeAreaProvider>
  );
}
