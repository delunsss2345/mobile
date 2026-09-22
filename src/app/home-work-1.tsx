import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HEADER_COLOR = "#312e81";

export default function HomeWorkOneScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.header}>
        <View style={styles.brand}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>C</Text>
          </View>
          <Text style={styles.appName}>CourseShop</Text>
        </View>

        <View style={styles.actions}>
          <Pressable
            accessibilityLabel="Search"
            accessibilityRole="button"
            hitSlop={8}
            style={({ pressed }) => [
              styles.iconButton,
              pressed && styles.iconButtonPressed,
            ]}>
            <SymbolView
              name={{
                ios: "magnifyingglass",
                android: "search",
                web: "search",
              }}
              size={24}
              tintColor="#fff"
            />
          </Pressable>

          <Pressable
            accessibilityLabel="Shopping cart"
            accessibilityRole="button"
            hitSlop={8}
            style={({ pressed }) => [
              styles.iconButton,
              pressed && styles.iconButtonPressed,
            ]}>
            <SymbolView
              name={{
                ios: "cart",
                android: "shopping_cart",
                web: "shopping_cart",
              }}
              size={24}
              tintColor="#fff"
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.content} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: HEADER_COLOR,
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logoText: {
    color: HEADER_COLOR,
    fontSize: 18,
  },
  appName: {
    color: "#fff",
    fontSize: 18,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  iconButtonPressed: {
    backgroundColor: "rgba(255, 255, 255, 0.16)",
  },
  content: {
    flex: 1,
  },
});
