import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TeachersLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(classDetails)/[id]"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="postClass"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
