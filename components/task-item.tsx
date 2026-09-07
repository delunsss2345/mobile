import { Pressable, Text, View } from 'react-native';

type TaskItemProps = {
  title: string;
  completed?: boolean;
};

export function TaskItem({ title, completed = false }: TaskItemProps) {
  return (
    <View className="gap-4 rounded-2xl border border-border bg-card p-4">
      <Text
        className={`text-base font-semibold text-foreground ${
          completed ? 'text-muted-foreground line-through' : ''
        }`}>
        {title}
      </Text>

      <View className="flex-row gap-3">
        <Pressable className="flex-1 items-center rounded-xl bg-primary px-4 py-3 active:opacity-80">
          <Text className="font-semibold text-primary-foreground">Mark</Text>
        </Pressable>

        <Pressable className="flex-1 items-center rounded-xl bg-destructive px-4 py-3 active:opacity-80">
          <Text className="font-semibold text-white">Remove</Text>
        </Pressable>
      </View>
    </View>
  );
}
