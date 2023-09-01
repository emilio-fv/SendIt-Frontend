import { TouchableOpacity, View } from "react-native";
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default SettingsIcon = () => {
  const handleSettingsPress = () => {
    return router.push('(headers)/settings');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleSettingsPress}>
        <Feather name="settings" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
};