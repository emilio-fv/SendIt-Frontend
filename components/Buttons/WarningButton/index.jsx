import { Pressable } from 'react-native';
import { COLORS } from '../../../constants';
import RegularText from '../../Text/RegularText';

export default WarningButton = ({ onPress, buttonStyle, textStyle, text, }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...buttonStyle,
        backgroundColor: COLORS.warning,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30
      }}
    >
      <RegularText 
        style={{
          ...textStyle,
          fontSize: 18
        }}
        text={text}
      />
    </Pressable>
  )
}