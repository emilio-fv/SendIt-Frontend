import { Text, View } from "react-native"
import { TouchableHighlight } from "react-native-gesture-handler"
import { COLORS } from "../../../constants"

export default ActionButton = ({ text, onPress,  }) => {
  return (
    <TouchableHighlight 
      onPress={onPress} 
      style={{ 
        marginTop: 10,
        borderRadius: 6,
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.action,
          height: 32,
          borderRadius: 6,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 20
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  )
}