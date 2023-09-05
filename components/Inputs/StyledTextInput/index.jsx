import { Text, TextInput, View } from "react-native"
import { COLORS } from "../../../constants"
import SemiBoldText from '../../Text/SemiBoldText';

export default StyledTextInput = ({ label, placeholder, onChange, value, error }) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <SemiBoldText
        style={{
          color: COLORS.lightText,
        }}
        text={label}
      />
      <TextInput
        style={{
            color: COLORS.lightText,
            borderWidth: .5,
            borderColor: `${error ? COLORS.warning : COLORS.cardBackground}`,
            padding: 6,
            textAlign: 'center',
            borderRadius: 6,
            fontFamily: 'Montserrat-Regular'
        }}
        placeholderTextColor={error ? COLORS.warning : COLORS.cardBackground}
        autoCapitalize='none'
        spellCheck={false}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
      />
      <View
        style={{
          height: 16,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {error 
          ? <ErrorText styles={{ textAlign: 'center', fontSize: 12 }} text={error} />
          : null
        }
      </View>
    </View>
  )
};