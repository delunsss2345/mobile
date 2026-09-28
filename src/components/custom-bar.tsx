import { Text, TouchableOpacity, View } from "react-native";

import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useState } from "react";

export const CustomBar = (payload: BottomTabBarProps) => {
  return (
    <View>
      {payload.state.routes.map((route) => {
        const [isFocused, setIsFocused] = useState();
        const handlePress = () => {
          payload.navigation.emit({
            type: "tabPress",
            target: payload.state.key,
            canPreventDefault: true,
          });
        };

        return (
          <TouchableOpacity key={payload.state.key} onPress={handlePress}>
            <Text
              style={{
                color: isFocused ? "#007AFF" : "#222",
                fontWeight: isFocused ? "bold" : "normal",
              }}
            >
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
