import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from 'expo-router';
import { COLORS } from "../constants";

export default Index = () => {
  // TODO: Check if user is logged in
  const handleRegisterLink = () => {
    return router.replace('(auth)/register');
  };

  const handleLoginLink = () => {
    return router.replace('(auth)/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Carousel */}
      <TouchableOpacity onPress={handleRegisterLink}>
        <Text style={styles.authLink}>Create an account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginLink}>
        <Text style={styles.authLink}>Already have an account? Login here.</Text>
      </TouchableOpacity>
      {/* <Link replace style={styles.authLink} href='(auth)/register'>Create an account</Link> */}
      {/* <Link replace style={styles.authLink} href='(auth)/login'>Already have an account? Login here.</Link> */}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.primary,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },
  authLink: {
    color: COLORS.lightText,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular'
  }
});