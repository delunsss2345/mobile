import { ListViewComponent } from "@/components/list-view";
import { Student, students } from "@/data/students";
import { useMemo, useState } from "react";
import { Alert } from "react-native";

export default function StudentTab() {
    const [search, setSearch] = useState('');

    const filteredCourses = useMemo(() => {
      return  students.filter((st) =>
      st.name.toLowerCase().includes(search.toLowerCase())
      )
    }, [search])
  
    const openCourse = (st: Student) => {
      Alert.alert(
        st.name,
        `St viên: ${st.id}\nSố sinh viên: ${st.age}`
      );
    };
  
    return (
        <ListViewComponent setSearch={setSearch} search={search} openComponents={openCourse} filtereds={filteredCourses}  />
      );
}