# SmartCampus - Bài thực hành Chương 2

Ứng dụng Expo SDK 54 minh họa React Native Core Primitives và tương tác bằng `Pressable`.

## Chức năng

- Màn hình hồ sơ bám theo wireframe SmartCampus.
- Ô tìm kiếm controlled với `value`, `onChangeText` và `placeholder`.
- Nút lưu hồ sơ có phản hồi nhấn và trạng thái vô hiệu hóa sau khi lưu.
- Hai nút tương tác có trạng thái thường, đang nhấn, đang xử lý và vô hiệu hóa.
- Có `accessibilityRole`, `accessibilityLabel`, `accessibilityHint` và `accessibilityState`.

## Component chính

- `Header`: tiêu đề SmartCampus.
- `Avatar` và `ProfileCard`: ảnh cùng thông tin sinh viên.
- `SearchField`: ô tìm kiếm controlled.
- `StudentCard` và `InfoRow`: thông tin email, lớp.
- `ActionButton` và `PressableButton`: các hành động có phản hồi chạm.

## Cách chạy

```bash
npm install
npm start
```

Sau đó nhấn `a` để mở Android, `i` để mở iOS hoặc `w` để mở web.

## Kiểm tra code

```bash
npm run lint
npx tsc --noEmit
```
