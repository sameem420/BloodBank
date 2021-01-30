import React from 'react';
import { ActivityIndicator, View,ImageBackground, Image, Text, StyleSheet, Dimensions } from 'react-native';
import {Spinner} from 'native-base';
import { firebaseAuth } from '../../environment/config';

export default class Loading extends React.Component {
    
componentDidMount() {
  firebaseAuth.onAuthStateChanged(user => {
    this.props.navigation.navigate(user ? 'Main' : 'Login')
  })
}

render() {
return (
    <ImageBackground source={require("../images/bgImg.jpg")} 
    style={{ resizeMode: "contain", width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}>
      <Spinner />
      <View style={styles.container}>
      <Image source={require("../images/userImg.png")}
           style={{ resizeMode: "contain",  width: 350, height: 120 }} />
      </View>
    </ImageBackground>
    )}
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    }
})