import { StyleSheet, Text, View } from "react-native"


const styles = StyleSheet.create({
    emptyContainer : {} , 
    emptyTitle : {} , 
    emptyText : {}
})

export const ListEmptyComponent = () => {
    return <>
    <View style={styles.emptyContainer}>
    <Text style={styles.emptyTitle}>
      Không tìm thấy khóa học
    </Text>

    <Text style={styles.emptyText}>
      Hãy thử tìm kiếm bằng một từ khóa khác.
    </Text>
  </View>
    </>
}

