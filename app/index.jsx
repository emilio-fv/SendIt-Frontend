import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from 'expo-router';
import { COLORS } from "../constants";
import Carousel from "../components/Carousel";

export default Index = () => {
  // TODO: Check if user is logged in
  return (
    <SafeAreaView style={styles.container}>
      <Carousel />
      <Link
        style={styles.authLink}
        replace
        href={'(auth)/login'}
      >
        Already have an account? Login here.
      </Link>
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
    gap: 25
  },
  authLink: {
    color: COLORS.lightText,
    fontSize: 14,
  }
});