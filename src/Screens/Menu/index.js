import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function MenuScreen({route,navigation}){
    return(
      <View>
        <Text>Test Menu</Text>
      </View>
    );
}

export default MenuScreen;