import { StyleSheet, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import RegularText from '../Text/RegularText';
import { router } from "expo-router";

export default Header = ({ page }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => router.back()}>
          <RegularText text={'Back'} />
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <RegularText text={page}/>
      </View>
      <View style={styles.right}>
        {/* Purposely left empty for future icon implementation */}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 10
  },
  left: {
    height: 25,
    flexBasis: 100,
    flexGrow: 0,
    flexShrink: 1,
    alignItems: 'center'
  },
  center: {
    height: 25,
    flexBasis: 'auto',
    flexGrow: 1,
    flexShrink: 0,
    alignItems: 'center'
  },
  right: {
    height: 25,
    flexBasis: 100,
    flexGrow: 0,
    flexShrink: 1,
  },
})