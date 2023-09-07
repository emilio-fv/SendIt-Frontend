
import { StyleSheet, View, Image } from "react-native";
import { COLORS } from "../../constants";
import RegularText from "../Text/RegularText";
import { router } from 'expo-router';
import ActionButton from "../Buttons/ActionButton";

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
        <RegularText style={styles.bodyText} text={'Track you current projects'}/>
        <RegularText style={styles.bodyText} text={'Share with other users'}/>
        <RegularText style={styles.bodyText} text={'An app built for climbers'}/>
      </View>
      <View style={styles.action}>
        <ActionButton text={'Create an account.'} onPress={handleRegisterLink} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lighterBackground,
    height: '80%',
    width: '80%',
    borderRadius: 10,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
  bodyText: {
    color: COLORS.lightText,
    fontSize: 20,
  },
  action: {
    flex: 1,
    paddingHorizontal: 60
  },
})