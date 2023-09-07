import { StyleSheet, TextInput, View } from "react-native"
import { COLORS } from "../../../constants"
import SemiBoldText from '../../Text/SemiBoldText';

export default PasswordInput = ({ label, placeholder, onChange, value, error, autoFocus, returnKeyType, onSubmitEditing, refHelper }) => {
  return (
    <View style={styles.container}>
      <SemiBoldText style={styles.label} text={label} />
      <TextInput 
        style={{
          ...styles.input,
          borderColor: `${error ? COLORS.warning : COLORS.cardBackground}`,
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
      <View style={styles.errors} >
        {error 
          ? <ErrorText styles={styles.errorText} text={error} />
          : null
        }
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 5
  },
  label: {
    color: COLORS.lightText,
  },
  input: {
    borderRadius: 5,
    borderWidth: .5,
    color: COLORS.lightText,
    padding: 5,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular'
  },
  errors: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorText: {
    textAlign: 'center', 
  }
})