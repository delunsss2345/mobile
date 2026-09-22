import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CART_ITEMS = [
  { id: 1, name: "Creative Journey", quantity: 1, price: "$12.99", image: require("@/assets/images/tutorial-web.png") },
  { id: 2, name: "Learning React", quantity: 2, price: "$37.00", image: require("@/assets/images/react-logo.png") },
  { id: 3, name: "Ideas That Matter", quantity: 1, price: "$14.25", image: require("@/assets/images/expo-logo.png") },
  { id: 4, name: "Design for Everyone", quantity: 1, price: "$21.00", image: require("@/assets/images/splash-icon.png") },
];

const TABS = [
  { label: "Home", ios: "house", material: "home" },
  { label: "Categories", ios: "square.grid.2x2", material: "category" },
  { label: "Cart", ios: "cart.fill", material: "shopping_cart" },
  { label: "Account", ios: "person", material: "person" },
] as const;

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <Pressable accessibilityLabel="Go back" hitSlop={8} onPress={() => router.back()}>
          <Text style={styles.backButton}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Your Cart</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.productList} contentContainerStyle={styles.productListContent}>
        {CART_ITEMS.map((item) => (
          <View key={item.id} style={styles.productRow}>
            <Image source={item.image} resizeMode="cover" style={styles.thumbnail} />
            <View style={styles.productNameArea}>
              <Text numberOfLines={2} style={styles.productName}>{item.name}</Text>
              <Text style={styles.productMeta}>Book</Text>
            </View>
            <View style={styles.quantityArea}>
              <Text style={styles.quantity}>×{item.quantity}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.checkoutArea}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>$85.24</Text>
        </View>
        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </Pressable>
      </View>

      <View style={styles.tabBar}>
        {TABS.map((tab) => {
          const selected = tab.label === "Cart";
          return (
            <View key={tab.label} style={styles.tabItem}>
              <SymbolView
                name={{ ios: tab.ios, android: tab.material, web: tab.material }}
                size={23}
                tintColor={selected ? "#000" : "#888"}
              />
              <Text style={[styles.tabLabel, selected && styles.selectedTabLabel]}>{tab.label}</Text>
            </View>
          );
        })}
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
  productList: { flex: 1 },
  productListContent: { padding: 16, gap: 12 },
  productRow: { paddingBottom: 12, flexDirection: "row", alignItems: "center", gap: 12, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  thumbnail: { width: 62, aspectRatio: 3 / 4, borderRadius: 5, backgroundColor: "#eee" },
  productNameArea: { flex: 1 },
  productName: { color: "#000", fontSize: 16 },
  productMeta: { marginTop: 5, color: "#777", fontSize: 13 },
  quantityArea: { width: 70, alignItems: "flex-end" },
  quantity: { color: "#555", fontSize: 14 },
  price: { marginTop: 8, color: "#000", fontSize: 15 },
  checkoutArea: { padding: 16, borderTopWidth: 1, borderTopColor: "#ddd", backgroundColor: "#fff" },
  totalRow: { marginBottom: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  totalLabel: { color: "#000", fontSize: 17 },
  totalPrice: { color: "#000", fontSize: 21 },
  checkoutButton: { paddingVertical: 14, alignItems: "center", borderRadius: 8, backgroundColor: "#000" },
  checkoutButtonText: { color: "#fff", fontSize: 16 },
  tabBar: { height: 68, flexDirection: "row", borderTopWidth: 1, borderTopColor: "#ddd", backgroundColor: "#fff" },
  tabItem: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 },
  tabLabel: { color: "#888", fontSize: 11 },
  selectedTabLabel: { color: "#000" },
});
