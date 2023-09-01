import { useState } from "react";
import { Text, TextInput, TouchableHighlight, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
        placeholder='First Name'
        onChange={setFirstName}
        value={firstName}
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
        placeholder='Last Name'
        onChange={setLastName}
        value={lastName}
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
        placeholder='Username'
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
        placeholder='Confirm Password'
        // onChange={}
        // value={}
      />
      <TouchableHighlight>
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
};

export default RegisterForm;