import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Course, courses } from '@/data/courses';
import CourseRow from '@/components/course-row';
import { ListEmptyComponent } from '@/components/list-empty';
import { ListHeaderComponents } from '@/components/list-header';

export default function CourseTab() {
  const [search, setSearch] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const openCourse = (course: Course) => {
    Alert.alert(
      course.title,
      `Giảng viên: ${course.instructor}\nSố sinh viên: ${course.students}`
    );
  };

  return (
    <View style={styles.container}>
      
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourseRow course={item} onPress={openCourse} />
        )}
        ListHeaderComponent={
          <ListHeaderComponents setQuery={(value) => setSearch(value)} filteredCourses={courses} query={search} />
        }
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <ListEmptyComponent />
        }
      />
    </View>
  );
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
