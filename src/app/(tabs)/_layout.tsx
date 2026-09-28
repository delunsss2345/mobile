import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
      <Tabs 
        screenOptions={{ headerShown: false }}
      >
        <Tabs.Screen name="home" options={{ title: 'Home' }} />
        <Tabs.Screen name="category" options={{ title: 'Danh mục' }} />
        <Tabs.Screen name="cart" options={{ title: 'Giỏ hàng' }} />
        <Tabs.Screen name="profile" options={{ title: 'Tài khoản' }} />
      </Tabs>
    );
  }