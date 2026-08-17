import { Image, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    avatarImage: {
      width: 100, 
      height: 100,
      borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth
    },
  });
  
const Avatar = () => {
    return <Image
    style={styles.avatarImage}
    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg?utm_source=vi.wikipedia.org&utm_campaign=index&utm_content=original' }}
    resizeMode="cover"
  />
}
export default Avatar ;