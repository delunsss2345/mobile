import { useEffect, useState } from "react";
import { StyleSheet, Switch, Text } from "react-native";

const messages = ['Chua bat cong tac' , 'Bat cong tac'] ; 
const CheckStatus = () => {     
    const [isConnected , setIsConnected] = useState(false) ; 
    const [message , setMessage] = useState(messages[0]) ;
    const [lastCn , setlastCn] = useState<Date | null>(null) ;

    useEffect(() => {
        if(isConnected) {
            setMessage(messages[1]) ; 
            setlastCn(new Date()) ; 
        } else {
            setMessage(messages[0]) ; 
            setlastCn(null) ; 
        }
    } , [isConnected])

    return <>
        <Switch value={isConnected} onValueChange={setIsConnected}>
            Bat cong tac
        </Switch>

        <Text  style={isConnected ? styles.buttonOn : styles.buttonOff}>  
            {message} 
        </Text>
        <Text  style={isConnected ? styles.buttonOn : styles.buttonOff}>  
            {!!lastCn ? lastCn?.toLocaleTimeString() : ''} 
        </Text>
    </>
}

export default CheckStatus; 

const styles = StyleSheet.create({
    buttonOff : {
       color:'blue'  
    },
    buttonOn : {
        color: 'red'
    }
})