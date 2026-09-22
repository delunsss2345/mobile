import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIES = ["Literature", "Economics", "Children's", "Life Skills", "Comics"];
const BOOKS = [
  { id: 1, title: "Creative Journey", price: "$12.99", image: require("@/assets/images/tutorial-web.png") },
  { id: 2, title: "Learning React", price: "$18.50", image: require("@/assets/images/react-logo.png") },
  { id: 3, title: "Ideas That Matter", price: "$14.25", image: require("@/assets/images/expo-logo.png") },
  { id: 4, title: "Design for Everyone", price: "$21.00", image: require("@/assets/images/splash-icon.png") },
];

export default function BookStoreHomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Pressable accessibilityLabel="Go back" hitSlop={8} onPress={() => router.back()}>
            <Text style={styles.backButton}>‹</Text>
          </Pressable>
          <Text style={styles.brand}>BookStore</Text>
          <View style={styles.headerActions}>
            <SymbolView name={{ ios: "magnifyingglass", android: "search", web: "search" }} size={23} tintColor="#fff" />
            <SymbolView name={{ ios: "cart", android: "shopping_cart", web: "shopping_cart" }} size={23} tintColor="#fff" />
          </View>
        </View>

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.chipsContainer}>
            {CATEGORIES.map((category) => (
              <View key={category} style={styles.chip}>
                <Text style={styles.chipText}>{category}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Popular Books</Text>
          <View style={styles.bookGrid}>
            {BOOKS.map((book) => (
              <View key={book.id} style={styles.bookCard}>
                <Image source={book.image} resizeMode="cover" style={styles.bookCover} />
                <View style={styles.bookInfo}>
                  <Text numberOfLines={2} style={styles.bookTitle}>{book.title}</Text>
                  <Text style={styles.bookPrice}>{book.price}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        <Pressable accessibilityLabel="Shopping cart, 3 items" style={styles.cartButton}>
          <SymbolView name={{ ios: "cart", android: "shopping_cart", web: "shopping_cart" }} size={26} tintColor="#fff" />
          <View style={styles.countBadge}><Text style={styles.countText}>3</Text></View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  screen: { flex: 1, position: "relative" },
  header: { height: 56, paddingHorizontal: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#000" },
  backButton: { width: 32, color: "#fff", fontSize: 36, lineHeight: 40 },
  brand: { color: "#fff", fontSize: 19 },
  headerActions: { width: 68, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  scrollView: { flex: 1 },
  content: { padding: 16, paddingBottom: 104 },
  sectionTitle: { marginBottom: 12, color: "#000", fontSize: 22 },
  chipsContainer: { marginBottom: 24, flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start", gap: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderWidth: 1, borderColor: "#000", borderRadius: 999, backgroundColor: "#fff" },
  chipText: { color: "#000", fontSize: 14 },
  bookGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  bookCard: { width: "48%", marginBottom: 16, overflow: "hidden", borderWidth: 1, borderColor: "#ddd", borderRadius: 10, backgroundColor: "#fff" },
  bookCover: { width: "100%", aspectRatio: 3 / 4, backgroundColor: "#eee" },
  bookInfo: { minHeight: 84, padding: 10, justifyContent: "space-between" },
  bookTitle: { color: "#000", fontSize: 15 },
  bookPrice: { marginTop: 8, color: "#000", fontSize: 16 },
  cartButton: { position: "absolute", right: 20, bottom: 24, width: 60, height: 60, borderRadius: 30, alignItems: "center", justifyContent: "center", backgroundColor: "#000" },
  countBadge: { position: "absolute", top: -4, right: -4, width: 22, height: 22, alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: "#000", borderRadius: 11, backgroundColor: "#fff" },
  countText: { color: "#000", fontSize: 12 },
});
