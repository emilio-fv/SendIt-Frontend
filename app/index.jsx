import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';
import { COLORS } from "../constants";
import RegularText from "../components/Text/RegularText";
import Carousel from "../components/Carousel";

export default Index = () => {
  // TODO: Check if user is logged in

  const handleLoginLink = () => {
    return router.replace('(auth)/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel />
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
    alignItems: 'center',
    gap: 25
  },
  authLink: {
    color: COLORS.lightText,
    fontSize: 14,
  }
});