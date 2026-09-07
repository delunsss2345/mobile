import { useEffect, useState } from "react";
import { View } from "react-native";

const TimerScreen = () => { 
   const [second , setSecond] = useState(0) ; 

   useEffect(() => {
        const itId = setInterval(() => {
            setSecond(second + 1) ;
         } , 1000)
        return () => {
            clearInterval(itId) ; 
         }
   } , [second])

    return <>
        <View>
           Time second {second ? second : 'Chua co thoi gian'}
        </View>
    </>
}

export default TimerScreen; 