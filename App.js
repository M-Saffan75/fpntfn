/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import react, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Home from './Screens/Home';
import { NotificationListner, requestUserPermission } from './Screens/PushNotification';

const App = () => {

  useEffect(() => {
    requestUserPermission();
    NotificationListner();
  }, [])
  
  return (
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>index ush Notification</Text>
    </View>
  );
};

export default App;
