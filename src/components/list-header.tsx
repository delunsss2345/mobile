import { Course } from "@/data/courses"
import { StyleSheet, Text, TextInput, View } from "react-native"

type ListHeaderParams = {
    query : string , 
    setQuery : (text : string) => void , 
    filteredCourses : Course[] 
}
const styles = StyleSheet.create({
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
      header: {
        marginHorizontal: 16,
        marginTop: 12,
        marginBottom: 4,
      } , 
      screenTitle: {
        marginHorizontal: 16,
        marginTop: 12,
        marginBottom: 4,
      } , 
      subtitle : {
        marginHorizontal: 16,
        marginTop: 12,
        marginBottom: 4,
      }
})

export const ListHeaderComponents = (params : ListHeaderParams) => {
    const {query , setQuery , filteredCourses} = params ;
    return<View style={styles.header}>
    <Text style={styles.screenTitle}>Course Catalog</Text>
    <Text style={styles.subtitle}>
      Khám phá các khóa học đang mở
    </Text>

    <TextInput
      value={query}
      onChangeText={setQuery}
      placeholder="Tìm theo tên, giảng viên hoặc danh mục"
      placeholderTextColor="#8A8F98"
      returnKeyType="search"
      style={styles.searchInput}
    />

    <Text>
      Tìm thấy {filteredCourses.length} khóa học
    </Text>
  </View>
      
}