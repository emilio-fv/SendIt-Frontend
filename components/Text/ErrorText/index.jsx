import { Text } from "react-native"
import { COLORS } from "../../../constants"

export default ErrorText = ({ styles, text }) => {
  return (
    <Text 
      style={{
        ...styles,
        color: COLORS.warning,
      }}
    >
      {text}
    </Text>
  )
}