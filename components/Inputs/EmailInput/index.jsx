import { TextInput } from "react-native"
import { COLORS } from "../../../constants"

export default EmailInput = ({ placeholder, onChange, value }) => {
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
      inputMode='email'
      keyboardType='email-address'
      placeholderTextColor={COLORS.lightText}
      placeholder={placeholder}
      autoCapitalize='none'
      spellCheck={false}
      onChange={onChange}
      value={value}
    />
  )
}