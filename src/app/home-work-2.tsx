import { router } from "expo-router";
import { Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Book = {
  id: number;
  title: string;
  price: string;
  cover: ImageSourcePropType;
};

const BOOKS: Book[] = [
  {
    id: 1,
    title: "The Creative Journey",
    price: "$12.99",
    cover: require("@/assets/images/tutorial-web.png"),
  },
  {
    id: 2,
    title: "Learning React",
    price: "$18.50",
    cover: require("@/assets/images/react-logo.png"),
  },
  {
    id: 3,
    title: "Ideas That Matter",
    price: "$14.25",
    cover: require("@/assets/images/expo-logo.png"),
  },
  {
    id: 4,
    title: "Design for Everyone",
    price: "$21.00",
    cover: require("@/assets/images/splash-icon.png"),
  },
];

export default function BookGridScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.header}>
        <Pressable
          accessibilityLabel="Go back"
          accessibilityRole="button"
          hitSlop={8}
          onPress={() => router.back()}>
          <Text style={styles.backButton}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Book Grid</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Popular Books</Text>
        <Text style={styles.description}>Lưới hai cột sử dụng Flexbox và chiều rộng phần trăm.</Text>

        <View style={styles.bookGrid}>
          {BOOKS.map((book) => (
            <View key={book.id} style={styles.bookCard}>
              <Image source={book.cover} resizeMode="cover" style={styles.bookCover} />
              <View style={styles.bookInfo}>
                <Text numberOfLines={2} style={styles.bookTitle}>
                  {book.title}
                </Text>
                <Text style={styles.bookPrice}>{book.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
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
    paddingBottom: 32,
  },
  title: {
    color: "#000",
    fontSize: 26,
  },
  description: {
    marginTop: 8,
    marginBottom: 20,
    color: "#666",
    fontSize: 15,
  },
  bookGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  bookCard: {
    width: "48%",
    marginBottom: 16,
    overflow: "hidden",
    borderRadius: 14,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  bookCover: {
    width: "100%",
    aspectRatio: 3 / 4,
    backgroundColor: "#eee",
  },
  bookInfo: {
    minHeight: 92,
    padding: 12,
    justifyContent: "space-between",
  },
  bookTitle: {
    color: "#000",
    fontSize: 15,
    lineHeight: 20,
  },
  bookPrice: {
    marginTop: 8,
    color: "#000",
    fontSize: 16,
  },
});
