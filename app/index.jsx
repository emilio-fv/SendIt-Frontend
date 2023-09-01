import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';
import { COLORS } from "../constants";
import RegularText from "../components/Text/RegularText";

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
        <RegularText style={styles.authLink} text={'Create an account'}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginLink}>
        <RegularText style={styles.authLink} text={'Already have an account? Login here.'}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.primary,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  authLink: {
    color: COLORS.lightText,
    fontSize: 18,
  }
});