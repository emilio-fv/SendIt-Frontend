import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";
import LoginForm from "../../components/Forms/LoginForm";

export default Login = () => {
  return (
    <SafeAreaView  style={styles.container}>
      <Text style={styles.heading}>
        Login
      </Text>
      <LoginForm />
      <Link
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
    gap: 20
  },
  heading: {
    color: COLORS.lightText,
    textAlign: 'center',
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