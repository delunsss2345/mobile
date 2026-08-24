import { FlatList, StyleSheet, View } from "react-native";
import { ListHeaderComponents } from "./list-header";
import CourseRow from "./course-row";
import { ListEmptyComponent } from "./list-empty";

export const ListViewComponent = ({filtereds ,openComponents, setSearch , search} :
     {filtereds :any[], openComponents : (item : any) => void , setSearch : (text : string) => void , search : string}) => {
    return <>
    
    <View style={styles.container}>
      <FlatList
        data={filtereds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourseRow course={item} onPress={openComponents} />
        )}
        ListHeaderComponent={
          <ListHeaderComponents setQuery={(text) => setSearch(text)} filteredCourses={filtereds} query={search} />
        }
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <ListEmptyComponent />
        }
      />
    </View>
    
    </>
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    searchInput: {
      backgroundColor: '#fff',
      marginHorizontal: 16,
      marginTop: 12,
      marginBottom: 4,
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 10,
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#e0e0e0',
    },
    list: {
      paddingVertical: 8,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 40,
      fontSize: 15,
      color: '#999',
    },
  });
  