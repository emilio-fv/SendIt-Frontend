import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";
import RegisterForm from "../../components/Forms/RegisterForm";
import RegularText from '../../components/Text/RegularText';

export default Register = () => {
  return (
    <SafeAreaView 
      style={styles.container} 
      onStartShouldSetResponder={() => Keyboard.dismiss()}
    >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <RegularText style={styles.heading} text={'Register'}/>
        <RegisterForm />
      </KeyboardAvoidingView>
      <Link 
        replace 
        style={styles.link} 
        href='/(auth)/login'
      >
        Already registered? Login here.
      </Link>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: '100%',
    justifyContent: 'center',
    gap: 20
  },
  heading: {
    color: COLORS.lightText,
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 20
  },
  link: {
    color: COLORS.lightText,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular'
  }
})