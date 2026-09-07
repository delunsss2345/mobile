import { TextInput } from 'react-native';

export function TaskInput() {
  return (
    <TextInput
      className="rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground"
      placeholder="Enter a task"
      placeholderTextColor="#737373"
    />
  );
}
