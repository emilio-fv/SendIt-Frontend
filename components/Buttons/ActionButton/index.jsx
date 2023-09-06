import { Pressable } from 'react-native';
import { COLORS } from '../../../constants';
import RegularText from '../../Text/RegularText';

export default ActionButton = ({ onPress, buttonStyle, textStyle, text, }) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={{ 
        ...buttonStyle,
        borderRadius: 6,
        backgroundColor: COLORS.action,
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