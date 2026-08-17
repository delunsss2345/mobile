import { StyleSheet, View } from "react-native";
import Avatar from "./avatar";
import StudentCard from "./cart-student";

const styles = StyleSheet.create({
    view: {
      display:'flex' ,
      gap:20,
      flexDirection:'row',
      alignItems:'center' 
    },
  });
  

const ProfileCard = () => {
  return (
    <>
      <View style={styles.view}>
        <Avatar />
        <StudentCard />
      </View>
    </>
  );
};

export default ProfileCard ; 