import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TABS = [
  { label: "Home", ios: "house.fill", material: "home", selected: true },
  { label: "Categories", ios: "square.grid.2x2", material: "category", selected: false },
  { label: "Cart", ios: "cart", material: "shopping_cart", selected: false },
  { label: "Account", ios: "person", material: "person", selected: false },
] as const;

export default function BottomTabBarScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <Pressable accessibilityLabel="Go back" hitSlop={8} onPress={() => router.back()}>
          <Text style={styles.backButton}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Static Tab Bar</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.title}>BookStore</Text>
        <Text style={styles.description}>
          Tab bar được đặt ngoài ScrollView nên luôn nằm cố định và không che nội dung.
        </Text>
        {Array.from({ length: 7 }, (_, index) => (
          <View key={index} style={styles.demoItem}>
            <View style={styles.thumbnail} />
            <View style={styles.itemText}>
              <Text style={styles.bookTitle}>Featured Book {index + 1}</Text>
              <Text style={styles.bookPrice}>$12.99</Text>
            </View>
          </View>
        ))}
        <Text style={styles.note}>
          Nếu dùng position: absolute, tab bar sẽ phủ lên nội dung và ScrollView cần thêm paddingBottom. Cách sibling như màn hình này phù hợp khi muốn hệ thống tự dành chỗ cho tab bar.
        </Text>
      </ScrollView>

      <View style={styles.tabBar}>
        {TABS.map((tab) => (
          <View key={tab.label} style={styles.tabItem}>
            <SymbolView
              name={{ ios: tab.ios, android: tab.material, web: tab.material }}
              size={23}
              tintColor={tab.selected ? "#000" : "#888"}
            />
            <Text style={[styles.tabLabel, tab.selected && styles.selectedTabLabel]}>{tab.label}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  header: { height: 56, paddingHorizontal: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#000" },
  backButton: { width: 32, color: "#fff", fontSize: 36, lineHeight: 40 },
  headerTitle: { color: "#fff", fontSize: 18 },
  headerSpacer: { width: 32 },
  scrollView: { flex: 1 },
  content: { padding: 16, gap: 12 },
  title: { color: "#000", fontSize: 26 },
  description: { marginBottom: 6, color: "#555", fontSize: 14, lineHeight: 21 },
  demoItem: { padding: 12, flexDirection: "row", alignItems: "center", gap: 12, borderWidth: 1, borderColor: "#ddd", borderRadius: 8 },
  thumbnail: { width: 48, aspectRatio: 3 / 4, borderRadius: 4, backgroundColor: "#ddd" },
  itemText: { flex: 1 },
  bookTitle: { color: "#000", fontSize: 16 },
  bookPrice: { marginTop: 4, color: "#555", fontSize: 14 },
  note: { padding: 12, color: "#333", fontSize: 13, lineHeight: 20, borderWidth: 1, borderColor: "#bbb", borderRadius: 8 },
  tabBar: { height: 68, flexDirection: "row", borderTopWidth: 1, borderTopColor: "#ddd", backgroundColor: "#fff" },
  tabItem: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 },
  tabLabel: { color: "#888", fontSize: 11 },
  selectedTabLabel: { color: "#000" },
});
