import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function BottomBarScreen({route,navigation}){
    return(
      <View>
        <Text>BottomBarScreen</Text>
      </View>
    );
}

export default BottomBarScreen;