import { Text, TextInput, TouchableHighlight, View } from "react-native";
import { COLORS } from "../../../constants";
import { router } from 'expo-router';

export default LoginForm = () => {
  const handleSubmit = () => {
    return router.replace('/(tabs)/home');
  };

  return (
    <View
      style={{
        gap: 16
      }}
    >
      <TextInput 
        style={{
          color: COLORS.lightText,
          borderWidth: .5,
          borderColor: COLORS.cardBackground,
          marginHorizontal: '25%',
          height: 32,
          textAlign: 'center',
          fontSize: 18,
          borderRadius: 6,
          fontFamily: 'Montserrat-Regular'
        }}
        placeholderTextColor={COLORS.lightText}
        placeholder='Email'
        // onChange={}
        // value={}
      />
      <TextInput 
        style={{
          color: COLORS.lightText,
          borderWidth: .5,
          borderColor: COLORS.cardBackground,
          marginHorizontal: '25%',
          height: 32,
          textAlign: 'center',
          fontSize: 18,
          borderRadius: 6,
          fontFamily: 'Montserrat-Regular'
        }}
        placeholderTextColor={COLORS.lightText}
        placeholder='Password'  
        // onChange={}
        // value={}
      />
      <TouchableHighlight onPress={handleSubmit}>
        <View
          style={{
            backgroundColor: COLORS.action,
            marginHorizontal: '25%',
            borderRadius: 6,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              fontSize: 20
            }}
          >Submit</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}