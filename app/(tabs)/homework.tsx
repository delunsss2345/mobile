import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function Homework() {
  return (
    <ScrollView 
    style={{
        backgroundColor : "#fff"
    }}
      >
    <View >
          <Text>Tiêu Đề Wireframe</Text>
        </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
