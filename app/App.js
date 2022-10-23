import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function GameScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Games!</Text>
      <Text style={{backgroundColor: 'gray', height: 20, width: '80%', justifyContent: 'center', alignItems: 'center'}}>20/10/2022</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'gray', height: '30%', width: '80%'}}>
        <View style={{flex: 2, height: '100%', width: '50%', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 20}}>
            <Text style={{ flex: 1, backgroundColor: 'black', width: 30, height: 40, borderRadius: 200 / 2}}></Text>
            <Text style={{ flex: 2,  marginLeft: 10}}>Time 1</Text>
          </View>
          <Text style={{flex: 1}}>PLacar Time 1</Text>
        </View>

          <Text>X</Text>

        <View style={{flex: 2, height: '100%', width: '50%', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 20}}>
            <Text style={{ flex: 1, backgroundColor: 'black', width: 30, height: 40, borderRadius: 200 / 2}}></Text>
            <Text style={{ flex: 2, marginLeft: 10}}>Time 2</Text>
          </View>
          <Text style={{flex: 1}}>PLacar Time 2</Text>
        </View>
      </View>      
    </View>
  );
}

function NewsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>News!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Games" component={GameScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}