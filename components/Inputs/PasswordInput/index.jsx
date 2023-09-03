import { TextInput, View } from "react-native"
import { COLORS } from "../../../constants"
import { Entypo } from '@expo/vector-icons';

export default PasswordInput = ({ placeholder, onChange, value }) => {
  return (
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
        autoCapitalize='none'
        spellCheck={false}
        secureTextEntry={true}
        placeholderTextColor={COLORS.lightText}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
  )
}