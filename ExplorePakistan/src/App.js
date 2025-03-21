import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen'
import RegionalInsightScreen from './screens/RegionalInsightScreen';
import BottomTabs from './navigation/BottomTab';
import SignupScreen from './screens/Signup';
import PopularSites from './screens/PopularSites';
import ExploreVillageScreen from './screens/ExploreVillageScreen';
import RegionEvents from './screens/RegionEvents';
import EmergencyContact from './screens/EmergencyContact';
import SearchScreen from './screens/SearchScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ExploreVillageScreen" component={ExploreVillageScreen} />
        <Stack.Screen name="PopularSites" component={PopularSites} />
        <Stack.Screen name="RegionEvents" component={RegionEvents} />
        <Stack.Screen name="EmergencyContact" component={EmergencyContact} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen
          name="RegionalInsight"
          component={RegionalInsightScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MainTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;