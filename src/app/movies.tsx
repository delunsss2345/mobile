import { FlatList, RefreshControl, ScrollView } from "react-native";

import { useCallback, useEffect, useState } from "react";
import axiosClient from "../libs/axios";
import MoveItem, { Movie } from "../components/movie-item";

const Movies = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const fetchMovie = async () => {
    try {
      const response = await axiosClient.get<Movie[]>("/");
      setMoviesList(response.data);
    } catch {
      throw new Error("Err");
    }
  };
  useEffect(() => {
   
    fetchMovie()
  }, []);

  return (
    <ScrollView 
    
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >  
      <FlatList
        data={moviesList}
        keyExtractor={(item: Movie) => item.id.toString()}
        renderItem={({ item }: { item: Movie }) => <MoveItem move={item} />}
      />
    </ScrollView>
  );
};

export default Movies;
