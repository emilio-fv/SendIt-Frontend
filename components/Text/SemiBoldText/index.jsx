import { Text } from "react-native"

export default SemiBoldText = ({ style, text }) => {
  return (
    <Text
      style={{
        ...style,
        fontFamily: 'Montserrat-SemiBold'
      }}
    >
      {text}
    </Text>
  )
};