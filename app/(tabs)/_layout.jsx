import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name='home'
        options={{
          tabBarLabel: 'Home',
          tabBarStyle: { paddingTop: 10 },
          tabBarIcon: () => (
            <Entypo name="home" size={24} color="black" />
          )
        }}
      />
      <Tabs.Screen 
        name='logClimb'
        options={{
          tabBarStyle: { paddingTop: 10 },
          tabBarButton: (props) => (
            <TouchableOpacity {...props}>
              <Ionicons name="add-circle-outline" size={36} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen 
        name='profile'
        options={{
          tabBarLabel: 'Profile',
          tabBarStyle: { paddingTop: 10 },
          tabBarIcon: () => (
            <FontAwesome name="user" size={24} color="black" />
          ) 
        }}
      />
    </Tabs>
  )
};
