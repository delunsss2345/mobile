export interface Student {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  grade: number;
}
export const students = [
  { id: 101, name: "John Smith", age: 16, gender: "Male", grade: 10 },
  { id: 102, name: "Emma Davis", age: 17, gender: "Female", grade: 11 },
  { id: 103, name: "Michael Brown", age: 15, gender: "Male", grade: 9 },
  { id: 104, name: "Sarah Wilson", age: 16, gender: "Female", grade: 10 }
];

