import { createContext, useContext } from "react";
import { View } from "react-native";


export const UserContext = createContext({
    name : ''
}) ;  
const ProfileScreen 
= () => { 
    const user = useContext(UserContext);
    return <>
        <View>
            Hi {user.name}
        </View>
    </>
}




export default ProfileScreen 
; 