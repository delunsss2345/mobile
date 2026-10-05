import { memo } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type Movie = {
  id: number;
  name: string;
  rating: number;
  genre: string;
  year: number;
  isWatch: false;
  poster: string;
};

const MoveItem = memo(({ move }: { move: Movie }) => {
    const handlerAlert = () =>{ 
        Alert.alert(String(move.year))
        console.log(move.id) ; 
    }
  return (
    <TouchableOpacity  onPress={() => handlerAlert}>
      <View>
        <Text>{move.id}</Text>
        <Text>{move.name}</Text>
        <Text>{move.rating.toFixed(1)} ⭐</Text>
        <Text>{move.genre}</Text>
        <Text>{move.year}</Text>
        <Text>{move.isWatch ? "✅" : "!✅"} </Text>
        {move?.poster ? (
          <Image source={{ uri: move.poster }} style={styles.posterImage} />
        ) : (
          <View>Is not image</View>
        )}
      </View>
    </TouchableOpacity>
  );
});
const styles = StyleSheet.create({
  posterImage: {
    width: 200,
    height: 300,
    borderRadius: 8,
  },
});
export default MoveItem;
