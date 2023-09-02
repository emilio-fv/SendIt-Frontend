
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { COLORS } from "../../constants";
import RegularText from "../Text/RegularText";
import SemiBoldText from "../Text/SemiBoldText";
import { router } from 'expo-router';

export default Carousel = () => {
  const handleRegisterLink = () => {
    return router.replace('(auth)/register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image 
          resizeMode='center'
          source={require('../../assets/images/Logo.png')}
        />
      </View>
      <View style={styles.body}>
        <RegularText style={styles.text} text={'Track you current projects'}/>
        <RegularText style={styles.text} text={'Share with other users'}/>
        <RegularText style={styles.text} text={'An app built for climbers'}/>
      </View>
      <View style={styles.action}>
        <TouchableOpacity onPress={handleRegisterLink} style={styles.actionButton}>
          <RegularText style={styles.buttonText} text={'Create an account'}/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lighterBackground,
    height: '80%',
    width: '80%',
    borderRadius: '20%',
  },
  logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 50,
  },
  action: {
    flex: 1,
    paddingHorizontal: 60
  },
  text: {
    color: COLORS.lightText,
    fontSize: 20,
  },
  actionButton: {
    borderWidth: 2,
    backgroundColor: COLORS.action,
    borderRadius: '5%',
    padding: 8
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center'
  }
})