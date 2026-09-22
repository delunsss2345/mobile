import { router } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookDetailScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <Pressable accessibilityLabel="Go back" hitSlop={8} onPress={() => router.back()}>
          <Text style={styles.backButton}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Book Detail</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Image source={require("@/assets/images/tutorial-web.png")} resizeMode="cover" style={styles.cover} />
        <Text style={styles.title}>The Creative Journey</Text>
        <Text style={styles.author}>by Alex Morgan</Text>
        <Text style={styles.price}>$12.99</Text>
        <View style={styles.divider} />
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>
          This book explores how small, consistent choices can shape a meaningful creative life. It combines practical exercises with thoughtful stories to help readers discover new ideas, build confidence, and maintain momentum.{"\n\n"}
          Each chapter focuses on a different stage of the creative process, from finding inspiration and organizing early thoughts to overcoming uncertainty and completing a project. The examples are designed to be approachable for beginners while remaining useful to experienced creators.{"\n\n"}
          Readers will learn how to create sustainable habits, evaluate their work without losing motivation, and turn everyday observations into original projects. The goal is not perfection, but steady progress and a clearer understanding of one&apos;s own creative voice.
        </Text>
      </ScrollView>

      <View style={styles.bottomBar}>
        <View><Text style={styles.totalLabel}>Price</Text><Text style={styles.bottomPrice}>$12.99</Text></View>
        <Pressable style={styles.addButton}><Text style={styles.addButtonText}>Add to Cart</Text></Pressable>
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
  content: { padding: 20, paddingBottom: 32 },
  cover: { width: "58%", maxWidth: 260, aspectRatio: 3 / 4, alignSelf: "center", backgroundColor: "#eee" },
  title: { marginTop: 22, color: "#000", fontSize: 26 },
  author: { marginTop: 6, color: "#666", fontSize: 15 },
  price: { marginTop: 14, color: "#000", fontSize: 22 },
  divider: { height: 1, marginVertical: 20, backgroundColor: "#ddd" },
  descriptionTitle: { marginBottom: 10, color: "#000", fontSize: 18 },
  description: { color: "#333", fontSize: 15, lineHeight: 24 },
  bottomBar: { paddingHorizontal: 20, paddingVertical: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderTopWidth: 1, borderTopColor: "#ddd", backgroundColor: "#fff" },
  totalLabel: { color: "#666", fontSize: 12 },
  bottomPrice: { color: "#000", fontSize: 19 },
  addButton: { paddingHorizontal: 28, paddingVertical: 14, borderRadius: 8, backgroundColor: "#000" },
  addButtonText: { color: "#fff", fontSize: 16 },
});
