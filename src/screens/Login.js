import React from 'react';
import { Form, Item, Input, Text, Button } from 'native-base';
import { View, StyleSheet, Animated, ImageBackground, Image, Dimensions } from 'react-native';
import { firebaseAuth } from '../../environment/config';
import EmailIcon from 'react-native-vector-icons/Entypo';
import PasswordIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginIcon from 'react-native-vector-icons/AntDesign';
import RegisterIcon from 'react-native-vector-icons/FontAwesome5';

export default class Login extends React.Component {
  state = { 
    email: '', 
    password: '', 
    errorMessage: null,
    fadeAnim: new Animated.Value(0) 
    }
    
    componentDidMount() {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(this.state.fadeAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true
        }).start();
  }
  handleLogin = async () => {
  await firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => this.props.navigation.navigate('Main'))
  .catch(error => this.setState({ errorMessage: error.message }));
}

render() {
  return (
    <ImageBackground source={require("../images/bgImg.jpg")} 
    style={{ resizeMode: "contain", width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, flex:1 }}>
  <View style={styles.container}>
     <View style={styles.headingSection}>
     <Animated.View
      style={{opacity: this.state.fadeAnim // Bind opacity to animated value
      }}
    ></Animated.View>
     <Image source={require("../images/userImg.png")}
         style={{ resizeMode: "contain",  width: 350, height: 120 }} /> 
     </View>
      <Text style={styles.heading}>Login</Text>
      {this.state.errorMessage &&
        <Text style={{ color: 'red' }}>
        {this.state.errorMessage}
        </Text>}
        <Form>
            <Item style={styles.inputItem}>
              <EmailIcon name='email' size={20} color="red"/>
              <Input placeholder='Enter your email' style={styles.inputStyles} onChangeText={email => this.setState({ email })}
              value={this.state.email}/>
            </Item> 
            <Item style={styles.inputItem}>
              <PasswordIcon name='key' size={20} color="red" />
              <Input placeholder='Enter your password' style={styles.inputStyles} secureTextEntry={true} onChangeText={password => this.setState({ password })}
           value={this.state.password}/>
            </Item>
            <Button full rounded success style={styles.loginBtn} onPress={this.handleLogin}>
              <Text>Login</Text>
              <LoginIcon name='login' size={20} color="white" />
            </Button>
            <Button full rounded danger style={styles.registerBtn} onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text>Don't have an account? SignUp</Text>
              <RegisterIcon name='users' size={20} color="white" />
            </Button>
          </Form>
    </View>
  </ImageBackground>
  )}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Cairo-Regular",
  },
  headingSection: {
    textAlign: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'red',
    fontSize: 36,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Cairo-SemiBold",
  }, 
  inputItem: {
    borderColor: '#FF5722',
    margin: 20,
    color: 'white',
  },
  inputStyles: {
    fontFamily: "Cairo-Regular",
  },
  loginBtn: {
    margin: 20,
    fontFamily: "Cairo-Regular",
  },
  registerBtn: {
    margin: 20,
    marginTop: 10,
    padding: 15,
    fontFamily: "Cairo-Regular",
  },
})