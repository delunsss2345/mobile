
import { useReducer } from "react";
import { Button, Text, TextInput } from "react-native";
interface User {
    email: string , 
    password : string , 
    error : string
}
const initialState  = {
    email: '',
    password: '',
    error: '',
};


enum typeE {
    SET_EMAIL , 
    SET_PASSWORD,
    SET_ERROR,
    RESET
}
const reducerAction = (state: User , action : {type : typeE , payload : string}) => {
    switch(action.type) {
        case typeE.SET_EMAIL:
            return { ...state, email: action.payload, error: '' };
      
          case  typeE.SET_PASSWORD:
            return { ...state, password: action.payload, error: '' };
      
          case typeE.SET_ERROR:
            return { ...state, error: action.payload };
      
          case typeE.RESET:
            return initialState;
      
          default:
            return state;
    }
}

const FormHome = () => {
    const [state , dispatch] = useReducer(reducerAction , initialState) ; 
    const handleLogin = () => {
        if(!state.email || !state.password) {
            return dispatch({
                type: typeE.SET_ERROR , 
                payload: 'theiu thong tin'
            })
        }
        
         dispatch({  type: typeE.SET_ERROR ,  payload: '' });

      };
      
return <>
       <TextInput
  value={state.email}
  onChangeText={text =>
    dispatch({ type: typeE.SET_EMAIL, payload: text })
  }
  placeholder="Email"
/>

<TextInput
  value={state.password}
  onChangeText={text =>
    dispatch({ type: typeE.SET_PASSWORD, payload: text })
  }
  placeholder="Mật khẩu"
  secureTextEntry
/>

<Button title="Login" onPress={() => {
    handleLogin()
}} />
<Text>
    {state.error}
</Text>
    </>
}

export default FormHome; 