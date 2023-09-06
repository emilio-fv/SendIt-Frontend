import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../../components/Header";
import WarningButton from '../../../components/Buttons/WarningButton';
import { SafeAreaView } from "react-native-safe-area-context";

export default Settings = () => {
  const handleLogout = () => {
    // TODO: handle login
  }

  return (
    <SafeAreaView>
      <Header page={'Settings'}/>
      <WarningButton 
        buttonStyle={styles.button} 
        onPress={() => handleLogout()} 
        text={'Logout'}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: '25%'
  }
})