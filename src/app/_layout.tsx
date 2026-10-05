import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NativeTabs } from "expo-router/unstable-native-tabs";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fff",
    padding: 10,
    fontWeight: 600,
    fontSize: 30,
  },
});
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="index" options={{ title: "Trang chủ" }} />
          <Stack.Screen
            name="movies"
            options={{ title: "Chi tiết sản phẩm" }}
          />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
