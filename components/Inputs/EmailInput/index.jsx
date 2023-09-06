import { COLORS } from "../../../constants"
import { Keyboard, TouchableWithoutFeedback, TextInput, View } from "react-native"
import ErrorText from "../../Text/ErrorText"
import SemiBoldText from '../../Text/SemiBoldText';
// import { View, TextInput, StyleSheet,  } from 'react-native';

export default EmailInput = ({ label, placeholder, onChange, value, error, autoFocus, returnKeyType, onSubmitEditing, refHelper }) => {
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
        <View
          style={{
            height: 12,
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