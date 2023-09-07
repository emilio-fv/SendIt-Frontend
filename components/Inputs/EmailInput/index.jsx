import { COLORS } from "../../../constants"
import { TextInput, View, StyleSheet } from "react-native"
import ErrorText from "../../Text/ErrorText"
import SemiBoldText from '../../Text/SemiBoldText';
// import { View, TextInput, StyleSheet,  } from 'react-native';

export default EmailInput = ({ label, placeholder, onChange, value, error, autoFocus, returnKeyType, onSubmitEditing, refHelper }) => {
  return (
      <View style={styles.container}>
        <SemiBoldText style={styles.label} text={label} />
        <TextInput
          style={{
            ...styles.input,
            borderColor: `${error ? COLORS.warning : COLORS.cardBackground}`,
          }}
          inputMode='email'
          keyboardType='email-address'
          ref={refHelper}
          autoFocus={autoFocus}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          placeholderTextColor={error ? COLORS.warning : COLORS.cardBackground}
          placeholder={placeholder}
          autoCapitalize='none'
          spellCheck={false}
          onChangeText={onChange}
          value={value}
        />
        <View style={styles.errors}>
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
    gap: 5,
  },
  label: {
    color: COLORS.lightText,
  },
  input: {
    borderRadius: 6,
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
});