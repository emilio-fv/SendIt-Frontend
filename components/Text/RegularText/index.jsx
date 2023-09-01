import { Text } from "react-native"

export default RegularText = ({ style, text }) => {
  return (
    <Text
      style={{
        ...style,
        fontFamily: 'Montserrat-Regular'
      }}
    >
      {text}
    </Text>
  )
};