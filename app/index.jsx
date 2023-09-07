import Carousel from "../components/Carousel";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router';
import { COLORS } from "../constants";

export default Index = () => {
  // TODO: Check if user is logged in
  return (
    <SafeAreaView style={styles.container}>
      <Carousel />
      <Link
        href={'(auth)/login'}
        replace
        style={styles.authLink}
      >
        Already have an account? Login here.
      </Link>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    flex: 1,
    flexDirection: 'column',
    gap: 25,
    justifyContent: 'center',
  },
  authLink: {
    color: COLORS.lightText,
    fontSize: 16,
  }
});