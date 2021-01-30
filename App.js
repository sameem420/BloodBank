/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; 
import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './src/screens/Loading';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Main from './src/screens/Main';

const Stack = createStackNavigator();

function ActionBarImage() {
  return (
    <Image source={require("./src/images/bd-1.png")}
         style={{ resizeMode: "contain",  width: 28, height: 28, marginLeft: 5 }} />
  );
}

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{
          headerStyle: {
            backgroundColor: '#535054',
          },
          headerTintColor: 'white', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerLeft: () => <ActionBarImage />,
        }}>
        <Stack.Screen name="Loading" component={Loading} options={{ title: '' }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Blood Bank - SignUp' }}/>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Blood Bank - Login' }}/>
        <Stack.Screen name="Main" component={Main} options={{ title: 'Blood Bank - Home' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.grey,
  },
  inputItem: {
    borderColor: '#FF5722',
    margin: 20,
  },
  loginBtn: {
    margin: 20,
  },
  registerBtn: {
    marginLeft: 20,
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
