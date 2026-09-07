import { useState } from "react";
import { Button, Text, TextInput } from "react-native";

const FormHome = () => {
    const [fullName, setFullName] = useState('') ; 
    const [tuoi, setTuoi] = useState<string | null>(null) ; 

return <>
        <TextInput 
        value={fullName}  
        onChangeText={setFullName}
        placeholder="Nhập họ tên"
        />

        <Text>
            {fullName ? `Xin chao ${fullName}` : `Nhap ten di`}
        </Text>

        <TextInput 
        value={tuoi ?? ''}  
        onChangeText={(text) => {
            
            // const vl = Number.isInteger(parseInt(text)) ; 
            // // if(vl) {
            // //     return  alert('La chuoi sai r')  ; 
            // // }
            const val = parseInt(text) ?? '' ; 
            if(isNaN(val)) setTuoi(null) ; 
            setTuoi(String(val))
        }}
        placeholder="Nhap Tuoi Di Input"
        />

        <Text>
            {tuoi ? Number(tuoi) < 18 ? 'Tuoi be hon 18' : 'Tuoi ok' : `Nhap tuoi di`}
        </Text>
        <Button onPress={
            () => {
                setFullName('') ; 
                setTuoi(null) ; 
            }
        } title="reset" />
    </>
}

export default FormHome; 