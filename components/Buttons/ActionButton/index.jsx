import { TouchableHighlight, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';
import RegularText from '../../Text/RegularText';

export default ActionButton = ({ onPress, buttonStyle, textStyle, text, }) => {
  return (
    <TouchableHighlight
      onPress={onPress} 
      underlayColor={COLORS.actionPress}
      style={{ 
        ...buttonStyle,
        ...styles.button
      }}
    >
      <RegularText
        style={{
          ...textStyle,
          ...styles.text
        }}
        text={text}
      />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: COLORS.action,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  },
  text: {
    fontSize: 16
  }
})