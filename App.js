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
import { createDrawerNavigator } from '@react-navigation/drawer';

import DonorIcon from 'react-native-vector-icons/FontAwesome5';
import LoginIcon from 'react-native-vector-icons/AntDesign';
import RegisterIcon from 'react-native-vector-icons/FontAwesome5';
import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Loading from './src/screens/Loading';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import Donor from './src/screens/Donor';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ActionBarImage() {
  return (
    <Image source={require("./src/images/bd-1.png")}
         style={{ resizeMode: "contain",  width: 28, height: 28, marginLeft: 5 }} />
  );
}

function HomeStack() {
  return (
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
  );
}

function Drawerr() {
  return (
  <Drawer.Navigator initialRouteName="HomeStack">
    <Drawer.Screen name="Main" component={HomeStack} 
    options={{ title: 'Home',
    drawerIcon: ({focused}) => (
      <HomeIcon
        name="shield-home-outline"
        size={18}
        color={focused ? '#7cc' : '#ccc'}
      />
    ), }}/>
    <Drawer.Screen name="Donor" component={Donor} 
    options={{ title: 'Be a Donor',
    drawerIcon: ({focused}) => (
      <DonorIcon
        name="hands-helping"
        size={18}
        color={focused ? '#7cc' : '#ccc'}
      />
    ), }}/>
    <Drawer.Screen name="Login" component={Login} 
     options={{ title: 'Login',
     drawerIcon: ({focused}) => (
       <LoginIcon
         name="login"
         size={18}
         color={focused ? '#7cc' : '#ccc'}
       />
     ), }}/>
    <Drawer.Screen name="SignUp" component={SignUp} 
    options={{ title: 'Register',
    drawerIcon: ({focused}) => (
      <RegisterIcon
        name="users"
        size={18}
        color={focused ? '#7cc' : '#ccc'}
      />
    ), }}/>
  </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Drawerr/>
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
