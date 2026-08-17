import { Pressable, Text } from "react-native";

const PressibleButton = ({isSubmitting , handleSubmit } : {isSubmitting : boolean , handleSubmit : () => any}) => {
   return <>
    <Pressable
          disabled={isSubmitting}
          onPress={handleSubmit}
          style={({ pressed }) => [
      
          ]}
          accessibilityRole="button"
          accessibilityLabel={isSubmitting ? "Đang gửi dữ liệu, vui lòng đợi" : "Xác nhận và gửi thông tin"}
          accessibilityState={{ disabled: isSubmitting, busy: isSubmitting }}
        >
          <Text>
            {isSubmitting ? 'ĐANG GỬI...' : 'XÁC NHẬN'}
          </Text>
        </Pressable>      
   </>
}
export default PressibleButton ; 