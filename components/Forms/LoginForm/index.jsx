import { Keyboard, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from "react-native";
import ActionButton from '../../Buttons/ActionButton';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from "react";
import EmailInput from "../../Inputs/EmailInput";
import PasswordInput from "../../Inputs/PasswordInput";

const errorLabels = {
  email: 'Email',
  password: 'Password'
};

export default LoginForm = () => {
  // Handle form data changes
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const ref_input2 = useRef();

  // Handle form errors
  const [errors, setErrors] = useState(null);
  const [initialRender, setInitialRender] = useState(true);

  // Form validations function
  const validate = (formData) => {
    let errors = null;
    const mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    for (const [key, value] of Object.entries(formData)) {
      if (!value || value?.length === 0) {
        errors = {
          ...errors,
          [key]: errorLabels[key] + ' is required.'
        }
      }

      if (key === 'email' && email) {
        if (!value.toString().match(mailFormat)) {
          errors = {
            ...errors,
            [key]: 'Invalid email'
          }
        }
      }
    }
    setErrors(errors);
    setInitialRender(false);
  }

  // Valid form data on changes
  useEffect(() => {
    if (!initialRender) {
      validate({
        email,
        password
      })
    }
  }, [email, password]);

  // Handle form submit
  const handleSubmit = () => {
    if (initialRender) {
      validate({
        email,
        password
      })
    }

    if (!errors) {
      // TODO: send form data to backend API
    }
  };

  return (
    <View
      style={{
        paddingHorizontal: '20%'
      }}
    >
      <EmailInput 
        label={'Email'}
        placeholder={'Email'}
        onChange={setEmail}
        value={email}
        error={errors?.email}
        returnKeyType={'next'}
        onSubmitEditing={() => ref_input2.current.focus()}
      />
      <PasswordInput 
        label={'Password'}
        placeholder={'Password'}
        onChange={setPassword}
        value={password}
        error={errors?.password}
        returnKeyType={'done'}
        refHelper={ref_input2}
      />
      <ActionButton 
        onPress={() => handleSubmit()}
        text={'Submit'}
      />
    </View>
  )
}