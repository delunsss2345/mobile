import { getProducts, Product } from "@/app/(tabs)/bai-14";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Bai15 = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await getProducts(1, 10);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const initFetch = async () => {
      setLoading(true);
      try {
        await fetchProducts();
      } finally {
        setLoading(false);
      }
    };

    initFetch();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchProducts();
    } finally {
      setRefreshing(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Loading</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default Bai15;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  loadingText: {
    fontSize: 16,
  },

  list: {
    padding: 16,
  },

  item: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
  },

  title: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 6,
  },
});
