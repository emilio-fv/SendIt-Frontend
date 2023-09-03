import { TextInput } from "react-native"
import { COLORS } from "../../../constants"

export default StyledTextInput = ({ placeholder, onChange, value }) => {
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
      placeholderTextColor={COLORS.lightText}
      autoCapitalize='none'
      spellCheck={false}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
    />
  )
};