import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIES = [
  "Literature",
  "Economics",
  "Children's",
  "Life Skills",
  "Comics",
  "History",
  "Science",
];

function CategoryChips({ alignToStart = false }: { alignToStart?: boolean }) {
  return (
    <View style={[styles.chipsContainer, alignToStart && styles.alignToStart]}>
      {CATEGORIES.map((category) => (
        <View key={category} style={styles.chip}>
          <Text style={styles.chipText}>{category}</Text>
        </View>
      ))}
    </View>
  );
}

export default function CategoryChipsScreen() {
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
        <Text style={styles.headerTitle}>Category Chips</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Book Categories</Text>
        <Text style={styles.description}>
          Các chip có chiều rộng tự động theo nội dung và tự xuống dòng khi hết chỗ.
        </Text>

        <Text style={styles.sectionTitle}>Không đặt alignContent</Text>
        <CategoryChips />

        <Text style={styles.sectionTitle}>alignContent: &quot;flex-start&quot;</Text>
        <CategoryChips alignToStart />
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
    marginBottom: 24,
    color: "#666",
    fontSize: 15,
    lineHeight: 22,
  },
  sectionTitle: {
    marginBottom: 10,
    color: "#000",
    fontSize: 16,
  },
  chipsContainer: {
    height: 150,
    marginBottom: 24,
    padding: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
  },
  alignToStart: {
    alignContent: "flex-start",
  },
  chip: {
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 999,
    backgroundColor: "#fff",
  },
  chipText: {
    color: "#000",
    fontSize: 14,
  },
});
