import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Flexbox Exercises</Text>
        <Text style={styles.subtitle}>Chọn bài tập để xem kết quả</Text>

        <Link href="/home-work-1" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Exercise 1: Header Bar</Text>
          </Pressable>
        </Link>

        <Link href="/home-work-1-1" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Exercise 1.1: Category Chips</Text>
          </Pressable>
        </Link>

        <Link href="/home-work-2" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Exercise 2: Book Grid</Text>
          </Pressable>
        </Link>

        <Link href="/home-3-1" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Exercise 3.1: Discount Badge</Text>
          </Pressable>
        </Link>

        <Link href="/home-3-2" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Exercise 3.2: Floating Cart</Text>
          </Pressable>
        </Link>

        <Link href="/home-4-1" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Exercise 4.1: BookStore Home</Text>
          </Pressable>
        </Link>

        <Link href="/home-4-2" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Exercise 4.2: Book Detail</Text>
          </Pressable>
        </Link>

        <Link href="/home-5-1" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Exercise 5.1: Bottom Tab Bar</Text>
          </Pressable>
        </Link>

        <Link href="/home-5-2" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Exercise 5.2: Cart Screen</Text>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 24,
    paddingBottom: 40,
    gap: 12,
  },
  title: {
    marginTop: 24,
    color: "#000",
    fontSize: 28,
  },
  subtitle: {
    marginBottom: 12,
    color: "#666",
    fontSize: 15,
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: "#000",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
