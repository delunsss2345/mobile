import { Pressable, Text } from 'react-native';

export function AddTaskButton() {
  return (
    <Pressable className="items-center rounded-xl bg-primary px-4 py-3 active:opacity-80">
      <Text className="text-base font-semibold text-primary-foreground">Add Task</Text>
    </Pressable>
  );
}
