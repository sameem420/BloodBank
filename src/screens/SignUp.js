import React, {useRef} from 'react';
import { Container, Header, Content, Form, Item, Input, Text, Button, Icon } from 'native-base';
import { View, Animated, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { firebaseAuth } from '../../environment/config';

export default class SignUp extends React.Component {
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
          duration: 5000,
          useNativeDriver: true
        }).start();
  }

    handleSignUp = async () => {
        await firebaseAuth.createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(() => this.props.navigation.navigate('Main'))
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
       <Text style={styles.heading}>Sign Up</Text>
        {this.state.errorMessage &&
         <Text style={{ color: 'red' }}>
           {this.state.errorMessage}
         </Text>}
           <Form>
            <Item style={styles.inputItem}>
              <Icon active name='person-outline' />
              <Input placeholder='Type your email' onChangeText={email => this.setState({ email })}
          value={this.state.email}/>
            </Item> 
            <Item style={styles.inputItem}>
              <Icon active name='key-outline' />
              <Input placeholder='Type your password' secureTextEntry={true} onChangeText={password => this.setState({ password })}
           value={this.state.password}/>
            </Item>
            <Button full rounded success style={styles.registerBtn} onPress={this.handleSignUp}>
              <Text>SignUp</Text>
              <Icon active name='person-add-outline' />
            </Button>
            <Button full rounded style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Login')}>
              <Text>Already have an account? Login</Text>
              <Icon active name='exit-outline' />
            </Button>
          </Form>
      </View>
    </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingSection: {
        borderColor: 1,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    heading: {
        color: 'white',
        fontSize: 26,
        marginBottom: 10
    },
    inputItem: {
        borderColor: '#FF5722',
        margin: 20,
        color: 'white',
      },
    loginBtn: {
      margin: 20,
    },
    registerBtn: {
      marginLeft: 20,
      marginRight: 20,
    },
})