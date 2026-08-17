import { TextInput, View } from "react-native";

const SearchField = ({onChangeText , placeholder } : {onChangeText : () => void , placeholder : string} ) => {
    return  <View >
    <TextInput 
    onChangeText={onChangeText} 
      placeholder={placeholder}
      placeholderTextColor="#888"
    />
  </View>
}

export default SearchField ; 