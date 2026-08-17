import React from 'react';
import {
    ActivityIndicator,
    Pressable,
    Text,
    ViewStyle,
} from 'react-native';

interface PressibleButtonProps {
  text: string;
  textLoading: string;
  handleSubmit: () => void;
  isSubmitting: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

export default function PressibleButton({
  text,
  textLoading,
  handleSubmit,
  isSubmitting,
  disabled = false,
  style,
}: PressibleButtonProps) {
  const isDisabled = isSubmitting || disabled;

  return (
    <Pressable
      onPress={handleSubmit}
      disabled={isDisabled}
      accessibilityLabel={text}
      accessibilityRole="button"
      accessibilityState={{
        disabled: isDisabled,
        busy: isSubmitting,
      }}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={({ pressed }) => [
        {
          minHeight: 48,
          minWidth: 48,
          paddingVertical: 14,
          paddingHorizontal: 20,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: isDisabled ? '#9CA3AF' : '#2563EB',
          opacity: isDisabled ? 0.6 : pressed ? 0.85 : 1,
        },
        style,
      ]}
    >
      {({ pressed }) => (
        <>
          {isSubmitting ? (
            <ActivityIndicator color="#FFFFFF" size="small" />
          ) : (
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: '600',
                textAlign: 'center',
                opacity: pressed && !isDisabled ? 0.9 : 1,
              }}
            >
              {text}
            </Text>
          )}
        </>
      )}
    </Pressable>
  );
}