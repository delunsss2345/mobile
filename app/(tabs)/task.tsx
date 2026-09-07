import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const initialTodos: Todo[] = [
  { id: 1, title: "Học React Native", completed: false },
  { id: 2, title: "Hoàn thành bài tập Expo", completed: true },
];

function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

export default function TaskScreen() {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<"light" | "dark">(systemTheme ?? "light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const [keyword, setKeyword] = useState("");
  const [showIncompleteOnly, setShowIncompleteOnly] = useState(false);

  const visibleTodos = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLocaleLowerCase("vi-VN");

    return todos.filter((todo) => {
      const matchesKeyword = todo.title
        .toLocaleLowerCase("vi-VN")
        .includes(normalizedKeyword);
      const matchesStatus = !showIncompleteOnly || !todo.completed;

      return matchesKeyword && matchesStatus;
    });
  }, [keyword, showIncompleteOnly, todos]);

  const totalTodos = useMemo(() => todos.length, [todos]);
  const incompleteTodos = useMemo(
    () => todos.filter((todo) => !todo.completed).length,
    [todos],
  );

  const handleAddTodo = () => {
    const title = newTodo.trim();
    if (!title) return;

    dispatch({
      type: "ADD_TODO",
      payload: { id: Date.now(), title, completed: false },
    });
    setNewTodo("");
  };

  const handleToggleTodo = useCallback((id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }, []);

  const handleDeleteTodo = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  useEffect(() => {
    console.log(`Danh sách hiện có ${todos.length} công việc`);
  }, [todos.length]);

  return (
    <ScrollView
      className="flex-1 bg-blue-950"
      contentContainerClassName="gap-6 px-5 py-16"
      keyboardShouldPersistTaps="handled">
      <View
        className={theme === "dark" ? "flex-1 bg-blue-950" : "flex-1 bg-white"}>
        <Text className={theme === "dark" ? "text-white" : "text-blue-950"}>
          Theme hiện tại: {theme}
        </Text>

        <Button title="Đổi giao diện" onPress={toggleTheme} />
      </View>
      <View className="gap-1">
        <Text className="text-3xl font-bold text-white">Công việc của tôi</Text>
        <Text className="text-base text-white">
          Tổng: {totalTodos} · Chưa hoàn thành: {incompleteTodos}
        </Text>
      </View>

      <View className="gap-3">
        <TextInput
          className="rounded-xl border border-blue-300 bg-blue-900 px-4 py-3 text-base text-white"
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={handleAddTodo}
          placeholder="Nhập công việc"
          placeholderTextColor="#ffffff"
          returnKeyType="done"
        />

        <Pressable
          className={`items-center rounded-xl bg-blue-600 px-4 py-3 active:opacity-80 ${
            !newTodo.trim() ? "opacity-50" : ""
          }`}
          disabled={!newTodo.trim()}
          onPress={handleAddTodo}>
          <Text className="text-base font-semibold text-white">
            Thêm công việc
          </Text>
        </Pressable>
      </View>

      <View className="gap-3">
        <TextInput
          className="rounded-xl border border-blue-300 bg-blue-900 px-4 py-3 text-base text-white"
          value={keyword}
          onChangeText={setKeyword}
          placeholder="Tìm theo từ khóa"
          placeholderTextColor="#ffffff"
        />

        <Pressable
          className={`items-center rounded-xl border px-4 py-3 active:opacity-80 ${
            showIncompleteOnly
              ? "border-blue-300 bg-blue-500"
              : "border-blue-300 bg-blue-800"
          }`}
          onPress={() => setShowIncompleteOnly((current) => !current)}>
          <Text className="font-semibold text-white">
            {showIncompleteOnly
              ? "Đang hiện việc chưa hoàn thành"
              : "Hiện việc chưa hoàn thành"}
          </Text>
        </Pressable>
      </View>

      <View className="gap-3">
        {visibleTodos.map((todo) => (
          <View
            key={todo.id}
            className="gap-4 rounded-2xl border border-blue-300 bg-blue-900 p-4">
            <Text
              className={`text-base font-semibold text-white ${
                todo.completed ? "line-through opacity-60" : ""
              }`}>
              {todo.title}
            </Text>

            <View className="flex-row gap-3">
              <Pressable
                className="flex-1 items-center rounded-xl bg-blue-600 px-4 py-3 active:opacity-80"
                onPress={() => handleToggleTodo(todo.id)}>
                <Text className="font-semibold text-white">
                  {todo.completed ? "Làm lại" : "Hoàn thành"}
                </Text>
              </Pressable>

              <Pressable
                className="flex-1 items-center rounded-xl bg-red-600 px-4 py-3 active:opacity-80"
                onPress={() => handleDeleteTodo(todo.id)}>
                <Text className="font-semibold text-white">Xóa</Text>
              </Pressable>
            </View>
          </View>
        ))}

        {visibleTodos.length === 0 && (
          <Text className="text-center text-base text-white">
            Không tìm thấy công việc phù hợp.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}
