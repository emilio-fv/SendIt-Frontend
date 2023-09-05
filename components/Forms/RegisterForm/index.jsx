// Imports
import { useEffect, useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { COLORS } from '../../../constants';
import ErrorText from '../../Text/ErrorText';
import StyledTextInput from '../../Inputs/StyledTextInput';
import EmailInput from '../../Inputs/EmailInput';
import PasswordInput from '../../Inputs/PasswordInput';

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
      {/* First Name */}
      <StyledTextInput 
        label={'First name'}
        placeholder={'First Name'} 
        onChange={setFirstName} 
        value={firstName}
        error={errors?.firstName}
      />

      {/* Last name */}
      <StyledTextInput 
        label={'Last Name'}
        placeholder={'Last Name'} 
        onChange={setLastName} 
        value={lastName}
        error={errors?.lastName}
      />

      {/* Username */}
      <StyledTextInput 
        label={'Username'}
        placeholder={'Username'} 
        onChange={setUsername} 
        value={username} 
        error={errors?.username}
      />

      {/* Email */}
      <EmailInput 
        label={'Email'}
        placeholder={'Email'} 
        onChange={setEmail} 
        value={email}
        error={errors?.email}
      />

      {/* Password */}
      <PasswordInput 
        label={'Password'}
        placeholder={'Password'} 
        onChange={setPassword} 
        value={password}
        error={errors?.password}
      />

      {/* Confirm Password */}
      <PasswordInput 
        label={'Confirm Password'}
        placeholder={'Confirm Password'} 
        onChange={setConfirmPassword} 
        value={confirmPassword}
        error={errors?.confirmPassword}
      />

      {/* TODO: abstract action button to it's own component */}
      <TouchableHighlight onPress={() => handleSubmit()}>
        <View
          style={{
            backgroundColor: COLORS.action,
            marginTop: 10,
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
          >
            Submit
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  )
};
