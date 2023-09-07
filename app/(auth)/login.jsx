import { Keyboard, KeyboardAvoidingView, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";
import LoginForm from "../../components/Forms/LoginForm";
import RegularText from "../../components/Text/RegularText";

export default Login = () => {
  return (
    <SafeAreaView 
      style={styles.container} 
      onStartShouldSetResponder={() => Keyboard.dismiss()}
    >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <RegularText style={styles.heading} text={'Login'}/>
        <LoginForm />
      </KeyboardAvoidingView>
      <Link
        replace
        style={styles.link}
        href='/(auth)/register' 
      >
        Don't have an account? Register here.
      </Link>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: '100%',
    justifyContent: 'center',
    gap: 25
  },
  heading: {
    color: COLORS.lightText,
    textAlign: 'center',
    marginBottom: 20, 
    fontSize: 32,
    fontFamily: 'Montserrat-Regular'
  },
  link: {
    color: COLORS.lightText,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular'
  }
});