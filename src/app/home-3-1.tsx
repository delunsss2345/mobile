import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DiscountBadgeScreen() {
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
        <Text style={styles.headerTitle}>Discount Badge</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <View style={styles.bookCard}>
          <View style={styles.coverContainer}>
            <Image
              source={require("@/assets/images/tutorial-web.png")}
              resizeMode="cover"
              style={styles.bookCover}
            />
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>-20%</Text>
            </View>
          </View>

          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>The Creative Journey</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>$12.99</Text>
              <Text style={styles.oldPrice}>$16.25</Text>
            </View>
          </View>
        </View>
      </View>
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
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  bookCard: {
    width: "70%",
    maxWidth: 280,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  coverContainer: {
    position: "relative",
  },
  bookCover: {
    width: "100%",
    aspectRatio: 3 / 4,
    backgroundColor: "#eee",
  },
  discountBadge: {
    position: "absolute",
    top: 6,
    left: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: "#dc2626",
  },
  discountText: {
    color: "#fff",
    fontSize: 13,
  },
  bookInfo: {
    padding: 14,
  },
  bookTitle: {
    color: "#000",
    fontSize: 17,
  },
  priceRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  price: {
    color: "#000",
    fontSize: 17,
  },
  oldPrice: {
    color: "#777",
    fontSize: 14,
    textDecorationLine: "line-through",
  },
});
