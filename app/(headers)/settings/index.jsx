import { router } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default Settings = () => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => router.back()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  )
};

// import { Stack, Link, router } from 'expo-router';
// import { Text, TouchableOpacity } from 'react-native';

// export default () => {
//   return (
//     <Stack>
//       <Stack.Screen 
//         name='addUser' 
//         options={{ 
//           headerTitle: 'Add User',
//           headerLeft: () => <TouchableOpacity onPress={() => router.back()}>
//             <Text>Back</Text>
//           </TouchableOpacity>
//         }}
//       />
//       <Stack.Screen 
//         name='settings' 
//         options={{ 
//           headerTitle: 'Settings',
//           headerLeft: () => <TouchableOpacity onPress={() => router.back()}>
//             <Text>Back</Text>
//           </TouchableOpacity>
//         }}
//       />
//     </Stack>
//   )
// };