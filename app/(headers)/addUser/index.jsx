import { SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

export default AddUser = () => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => router.back()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>Add User</Text>
      </View>
    </SafeAreaView>
  )
};