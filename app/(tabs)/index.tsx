import { ScrollView, Text, View } from 'react-native';

import { AddTaskButton } from '@/components/add-task-button';
import { TaskInput } from '@/components/task-input';
import { TaskItem } from '@/components/task-item';

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="gap-6 px-5 py-16"
      keyboardShouldPersistTaps="handled">
      <View className="gap-1">
        <Text className="text-3xl font-bold text-foreground">My Tasks</Text>
        <Text className="text-base text-muted-foreground">Keep track of what you need to do.</Text>
      </View>

      <View className="gap-3">
        <TaskInput />
        <AddTaskButton />
      </View>

      <TaskItem title="Học React Native" />
    </ScrollView>
  );
}
