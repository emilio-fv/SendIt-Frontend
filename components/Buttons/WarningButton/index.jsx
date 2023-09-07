import { StyleSheet, TouchableHighlight } from 'react-native';
import { COLORS } from '../../../constants';
import RegularText from '../../Text/RegularText';

export default WarningButton = ({ onPress, buttonStyle, textStyle, text, }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
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
};

const styles = StyleSheet.create({
  button: {
        backgroundColor: COLORS.warning,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30
  },
  text: {
    fontSize: 16
  }
})