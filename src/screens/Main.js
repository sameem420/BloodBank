import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '../../node_modules/@react-navigation/drawer';

import { Alert, SafeAreaView, Image, Dimensions, ImageBackground, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { firebaseAuth } from '../../environment/config';

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const MainContainer = () => {
  return(
  <Drawer.Navigator initialRouteName="HomeScreen">
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  </Drawer.Navigator>
  );
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentUser: null, errorMessage: null }
 }
    onPressButton = async () => {
      await firebaseAuth.signOut()
      .then(() => this.props.navigation.navigate('Login'))
      .catch(error => this.setState({ errorMessage: error.message }));
  }
  componentDidMount() {
    const { currentUser } = firebaseAuth;
    this.setState({ currentUser })
}

render() {
  const { currentUser } = this.state
  return (
    <>
    <MainContainer/>
    <ImageBackground source={require("../images/bgImg.jpg")} 
    style={{ resizeMode: "contain", width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}>
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
          </Text>
      <View>
        <Button style={styles.signoutBtn}
        onPress={this.onPressButton}
        title="Sign Out"
        />
        </View>
      </View>
    </ImageBackground>
  </>
  )}
}
const styles = StyleSheet.create({
container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center'
},
signoutBtn: {
  margin: 10,
},
MainContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
},

sectionView: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 12,
},
separatorLine: {
  flex: 1,
  backgroundColor: 'black',
  height: 1.2,
  marginLeft: 12,
  marginRight: 24,
},
})