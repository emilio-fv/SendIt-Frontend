// Imports
import { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { COLORS } from '../../../constants';
import StyledTextInput from '../../Inputs/StyledTextInput';
import EmailInput from '../../Inputs/EmailInput';
import PasswordInput from '../../Inputs/PasswordInput';
import ActionButton from '../../Buttons/ActionButton';
import { router } from 'expo-router';

const errorLabels = {
  firstName: 'First Name',
  lastName: 'Last Name',
  username: 'Username',
  email: 'Email',
  password: 'Password',
  confirmPassword: 'Confirm Password'
};

export default RegisterForm = () => {
  // Handle form data changes
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();

  // Handle form errors
  const [errors, setErrors] = useState(null);
  const [initialRender, setInitialRender] = useState(true);

  // Form validations function
  const validate = (formData) => { // Handle validating form data
    let errors = null;
    const mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    // Iterate over all fields
    for (const [key, value] of Object.entries(formData)) {
      // Handle required fields
      if (!value || value?.length === 0) {
        errors = {
          ...errors,
          [key]: errorLabels[key] + ' is required.'
        }
      } else {
        // Handle email format
        if (key === 'email') {
          if (!value.toString().match(mailFormat)) {
            errors = {
              ...errors,
              [key]: 'Invalid email'
            }
          }
        }

        // Handle password fields
        if (key === 'confirmPassword') { // compare password and matching password
          if (value !== formData.password) {
            errors = {
              ...errors,
              [key]: 'Passwords must match.'
            }
          }
        }
      }
    }
    setErrors(errors);
    setInitialRender(false);
  };

  // Validate form data on changes
  useEffect(() => {
    if (!initialRender) {
      validate({
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword
      });
    }
  }, [firstName, lastName, username, email, password, confirmPassword]);


  // Handle form submit
  const handleSubmit = () => {
    if (initialRender) {
      validate({
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword
      });
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
      <StyledTextInput 
        label={'First name'}
        placeholder={'First Name'} 
        onChange={setFirstName} 
        value={firstName}
        error={errors?.firstName}
        returnKeyType={'next'}
        onSubmitEditing={() => ref_input2.current.focus()}
      />
      <StyledTextInput 
        label={'Last Name'}
        placeholder={'Last Name'} 
        onChange={setLastName} 
        value={lastName}
        error={errors?.lastName}
        returnKeyType={'next'}
        onSubmitEditing={() => ref_input3.current.focus()}
        refHelper={ref_input2}
      />
      <StyledTextInput 
        label={'Username'}
        placeholder={'Username'} 
        onChange={setUsername} 
        value={username} 
        error={errors?.username}
        returnKeyType={'next'}
        onSubmitEditing={() => ref_input4.current.focus()}
        refHelper={ref_input3}
      />
      <EmailInput 
        label={'Email'}
        placeholder={'Email'} 
        onChange={setEmail} 
        value={email}
        error={errors?.email}
        returnKeyType={'next'}
        onSubmitEditing={() => ref_input5.current.focus()}
        refHelper={ref_input4}
      />
      <PasswordInput 
        label={'Password'}
        placeholder={'Password'} 
        onChange={setPassword} 
        value={password}
        error={errors?.password}
        returnKeyType={'next'}
        onSubmitEditing={() => ref_input6.current.focus()}
        refHelper={ref_input5}
      />
      <PasswordInput 
        label={'Confirm Password'}
        placeholder={'Confirm Password'} 
        onChange={setConfirmPassword} 
        value={confirmPassword}
        error={errors?.confirmPassword}
        returnKeyType={'done'}
        refHelper={ref_input6}
      />
      <ActionButton 
        onPress={() => handleSubmit()}
        text={'Submit'}
      />
    </View>
  )
};
