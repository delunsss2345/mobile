import { FlatList, Text } from "react-native"
import CourseRow from "./course-row"
import { Course } from "@/data/courses"

export const CourseListScreen = ({filteredCourses , openCourse} : {filteredCourses: Course[] , openCourse : (course: Course) => void}) => {
    return <>
        <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourseRow course={item} onPress={openCourse} />
        )}
        ListEmptyComponent={
          <Text>Không tìm thấy khóa học</Text>
        }
      />
    </>
} 