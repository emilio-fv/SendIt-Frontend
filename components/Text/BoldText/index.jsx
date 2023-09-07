import { Text } from "react-native"

export default BoldText = ({ style, text }) => {
  return (
    <Text
      style={{
        ...style,
        fontFamily: 'Montserrat-Bold'
      }}
    >
      {text}
    </Text>
  )
};