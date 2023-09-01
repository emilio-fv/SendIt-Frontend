import { Stack } from 'expo-router';
import AddUserIcon from '../../../components/Icons/AddUserIcon';
import SettingsIcon from '../../../components/Icons/SettingsIcon';

export default () => {
  return (
    <Stack>
      <Stack.Screen 
        name='index'
        options={{
          headerLeft: () => <AddUserIcon />,
          headerTitle: 'Home',
          headerRight: () => <SettingsIcon />,
        }}
      />
    </Stack>
  )
};