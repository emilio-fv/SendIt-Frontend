import { Stack, Link, router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

export default () => {
  return (
    <Stack>
      <Stack.Screen 
        name='addUser' 
        options={{ 
          headerTitle: 'Add User',
          headerLeft: () => <TouchableOpacity onPress={() => router.back()}>
            <Text>Back</Text>
          </TouchableOpacity>
        }}
      />
      <Stack.Screen 
        name='settings' 
        options={{ 
          headerTitle: 'Settings',
          headerLeft: () => <TouchableOpacity onPress={() => router.back()}>
            <Text>Back</Text>
          </TouchableOpacity>
        }}
      />
    </Stack>
  )
};