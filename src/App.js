// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './Screens/Menu/index'
import BottomBarScreen from './Screens/BottomBar/index'
import BreathingScreen from './Screens/Breathing/index'
import AnxietyScreen from './Screens/Anxiety/index'

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Accueil</Text>
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}>
      </Button>
      <Button
        title="Go to Bottom"
        onPress={() => navigation.navigate('Bottom')}>
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




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Bottom" component={BottomBarScreen} />
        <Stack.Screen name="Breathing" component={BreathingScreen} />
        <Stack.Screen name="Anxiety" component={AnxietyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;