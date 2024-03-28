import React from 'react';
import TabNavigator from './src/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};