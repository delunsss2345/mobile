import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ITEMS = Array.from({ length: 10 }, (_, index) => `Book ${index + 1}`);

export default function FloatingCartScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Pressable
            accessibilityLabel="Go back"
            accessibilityRole="button"
            hitSlop={8}
            onPress={() => router.back()}>
            <Text style={styles.backButton}>‹</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Floating Cart</Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Book List</Text>
          {ITEMS.map((item) => (
            <View key={item} style={styles.listItem}>
              <View style={styles.bookThumbnail} />
              <View>
                <Text style={styles.bookTitle}>{item}</Text>
                <Text style={styles.bookPrice}>$12.99</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <Pressable
          accessibilityLabel="Shopping cart, 3 items"
          accessibilityRole="button"
          style={({ pressed }) => [styles.cartButton, pressed && styles.cartButtonPressed]}>
          <SymbolView
            name={{ ios: "cart", android: "shopping_cart", web: "shopping_cart" }}
            size={27}
            tintColor="#fff"
          />
          <View style={styles.countBadge}>
            <Text style={styles.countText}>3</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screen: {
    flex: 1,
    position: "relative",
  },
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
  },
  backButton: {
    width: 32,
    color: "#fff",
    fontSize: 36,
    lineHeight: 40,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
  },
  headerSpacer: {
    width: 32,
  },
  content: {
    padding: 16,
    paddingBottom: 100,
    gap: 12,
  },
  title: {
    marginBottom: 4,
    color: "#000",
    fontSize: 26,
  },
  listItem: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  bookThumbnail: {
    width: 48,
    aspectRatio: 3 / 4,
    borderRadius: 4,
    backgroundColor: "#ddd",
  },
  bookTitle: {
    color: "#000",
    fontSize: 16,
  },
  bookPrice: {
    marginTop: 4,
    color: "#555",
    fontSize: 14,
  },
  cartButton: {
    position: "absolute",
    right: 20,
    bottom: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  cartButtonPressed: {
    opacity: 0.7,
  },
  countBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    minWidth: 22,
    height: 22,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 11,
    backgroundColor: "#fff",
  },
  countText: {
    color: "#000",
    fontSize: 12,
  },
});
