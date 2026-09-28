import * as SplashScreen from 'expo-splash-screen';

import { Stack } from 'expo-router';
SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  return (
    <> 
    <Stack>
      <Stack.Screen name='(tabs)' />
      <Stack.Screen 
        name="book-detail" 
        options={{ 
          headerShown: true, 
          title: 'Chi tiết sách',
          headerBackTitle: 'Quay lại' 
        }} 
      />
    </Stack>
    </>
  );
}
