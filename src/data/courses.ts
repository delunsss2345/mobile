export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  students: number;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Lập trình React Native',
    instructor: 'TS. Nguyễn Văn A',
    category: 'Di động',
    students: 120,
  },
  {
    id: '2',
    title: 'Cấu trúc dữ liệu và giải thuật',
    instructor: 'PGS. Trần Thị B',
    category: 'Cơ bản',
    students: 200,
  },
  {
    id: '3',
    title: 'Trí tuệ nhân tạo',
    instructor: 'TS. Lê Văn C',
    category: 'AI',
    students: 85,
  },
  {
    id: '4',
    title: 'Cơ sở dữ liệu',
    instructor: 'TS. Phạm Minh D',
    category: 'Database',
    students: 150,
  },
  {
    id: '5',
    title: 'Mạng máy tính',
    instructor: 'PGS. Hoàng Văn E',
    category: 'Mạng',
    students: 95,
  },
];
