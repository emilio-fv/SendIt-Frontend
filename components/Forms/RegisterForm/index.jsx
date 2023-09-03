import { useEffect, useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { COLORS } from '../../../constants';
import ErrorText from '../../Text/ErrorText';
import StyledTextInput from '../../Inputs/StyledTextInput';
import EmailInput from '../../Inputs/EmailInput';
import PasswordInput from '../../Inputs/PasswordInput';

const errorLabels = {
  firstName: 'First Name',
  // lastName: 'Last Name',
  // username: 'Username',
  // email: 'Email',
  // password: 'Password',
  // confirmPassword: 'Confirm Password'
};

const RegisterForm = () => {
  // Handle form data changes
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setCon] = useState('');

  const [errors, setErrors] = useState(null);
  const [initialRender, setInitialRender] = useState(true);

  // Handle form validations
  const validate = (formData) => { // Handle validating form data
    // const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log('validate function');
    // console.log(formData);
    for (const [key, value] of Object.entries(formData)) {
      if (value?.length > 0) {
        if (errors && errors[key]) {
          delete errors[key];
        }
        setErrors({
          ...errors
        });
      }

      if (!initialRender && !value) {          
        setErrors({
          ...errors,
          [key]: `${errorLabels[key]} is required.`
        });
      }

      if (value?.length === 0) { // Handle required fields
        setErrors({
          ...errors,
          [key]: `${errorLabels[key]} is required.`
        });
      }

      // if (key === 'email' && !value.match(mailFormat)) { // Handle email format
      //   setErrors({
      //     [key]: 'Invalid email.'
      //   })
      // } 

      // if (key === 'password' && value !== formData.confirmPassword) { // compare password and matching password
      //   setErrors({
      //     [key]: 'Passwords must match.'
      //   });
      // }
    }

    if (errors && Object.keys(errors).length === 0) {
      setErrors(null);
    }

    setInitialRender(false);
  };

  useEffect(() => {
    validate({
      firstName,
      // lastName,
      // username,
      // email,
      // password,
      // confirmPassword
    });
  }, [firstName, lastName, username, email, password, confirmPassword]);

  const handleSubmit = () => {
    console.log(errors);
    validate({
      firstName
    });

    if (!errors) {
      console.log('all fields valid');
      // TODO: send form data to backend API
    }
  };

  return (
    <View
      style={{
        // gap: 16
      }}
    >
      <StyledTextInput placeholder={'First Name'} onChange={setFirstName} value={firstName} />
      <View style={{ height: 16 }}>
        {errors?.firstName ? <ErrorText text={errors?.firstName}/> : null}
      </View>
      {/* <StyledTextInput placeholder={'Last Name'} onChange={null} value={null} /> */}
      {/* <StyledTextInput placeholder={'Username'} onChange={null} value={null} /> */}
      {/* <EmailInput placeholder={'Email'} onChange={null} value={null}/> */}
      {/* <PasswordInput placeholder={'Password'} onChange={null} value={null}/> */}
      {/* <PasswordInput placeholder={'Confirm Password'} onChange={null} value={null}/> */}
      {/* TODO: abstract action button to it's own component */}
      <TouchableHighlight onPress={() => handleSubmit()}>
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
          >
            Submit
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  )
};

export default RegisterForm;