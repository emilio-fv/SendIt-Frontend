import { Text, TextInput, View } from "react-native"
import { COLORS } from "../../../constants"
import SemiBoldText from '../../Text/SemiBoldText';

export default PasswordInput = ({ label, placeholder, onChange, value, error, autoFocus, returnKeyType, onSubmitEditing, refHelper }) => {
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
        autoCapitalize='none'
        spellCheck={false}
        secureTextEntry={true}
        autoFocus={autoFocus}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        ref={refHelper}
        placeholderTextColor={error ? COLORS.warning : COLORS.cardBackground}
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
}