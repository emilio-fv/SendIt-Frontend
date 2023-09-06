import { TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

export default AddUserIcon = () => {
  const handleAddUserPress = () => {
    return router.push('(headers)/addUser');
  }

  return (
    <View>
      <TouchableOpacity onPress={() => handleAddUserPress()}>
        <AntDesign name="adduser" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
};