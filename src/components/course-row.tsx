import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Course } from '../data/courses';

interface CourseRowProps {
  course: Course;
  onPress: (course: Course) => void;
}

export default function CourseRow({ course, onPress }: CourseRowProps) {
  return (
    <Pressable
      onPress={() => onPress(course)}
      style={({ pressed }) => [
        styles.courseCard,
        pressed && styles.courseCardPressed,
      ]}
    >
      <Text style={styles.courseTitle}>{course.title}</Text>
      <Text style={styles.instructor}>Giảng viên: {course.instructor}</Text>
      <View style={styles.courseFooter}>
        <Text style={styles.category}>{course.category}</Text>
        <Text style={styles.studentCount}>{course.students} sinh viên</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  courseCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  courseCardPressed: {
    opacity: 0.7,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  instructor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    fontSize: 12,
    color: '#208AEF',
    fontWeight: '500',
  },
  studentCount: {
    fontSize: 12,
    color: '#888',
  },
});
