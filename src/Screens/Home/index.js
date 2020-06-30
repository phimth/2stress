import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Accueil</Text>
        <Button
          title="Go to Menu"
          onPress={() => navigation.navigate('Menu')}>
        </Button>
        <Button
          title="Go to Breath"
          onPress={() => navigation.navigate('Breathing')}>
        </Button>
        <Button
          title="Go to Anxiety"
          onPress={() => navigation.navigate('Anxiety')}>
        </Button>
    </View>
    );
  }

export default HomeScreen;