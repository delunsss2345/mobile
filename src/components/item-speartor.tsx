import { StyleSheet, View } from "react-native"

export const styles = StyleSheet.create({
    separator: {
        height: 12,
      }
})

export const ItemSeparatorComponent = () => {
    return <>
    <View style={styles.separator} />
</>
}