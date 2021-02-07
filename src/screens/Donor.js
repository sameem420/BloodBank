import React from 'react';
import { Container, Header, Picker, Form, Item, Input, Text, Button, Icon } from 'native-base';
import { View, Animated, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { firebaseDB } from '../../environment/config';

const postsRef = firebaseDB.child('postsInfo');

export default class Donor extends React.Component {
    state = { 
      name: '', 
      mobile_number: '', 
      address: '',
      errorMessage: null,
      blood_group: undefined
    };
    onbloodgroupChange(value) {
    this.setState({
      blood_group: value
    });
  }  
    componentDidMount() {
        
    }

    handlePost = () => {
      postsRef.push({
        name: this.state.name, 
        mobile_number: this.state.mobile_number, 
        address: this.state.address, 
        blood_group: this.state.blood_group
      }).then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
  }
  
  render() {
    return (
      <ImageBackground source={require("../images/bgImg.jpg")} 
      style={{ resizeMode: "contain", width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, flex:1 }}>
    <View style={styles.container}>
       <View style={styles.headingSection}>
       <Image source={require("../images/userImg.png")}
           style={{ resizeMode: "contain",  width: 350, height: 120 }} /> 
       </View>
        <Text style={styles.heading}>Help someone, Donate Blood!</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
          {this.state.errorMessage}
          </Text>}
          <Form>
              <Item style={styles.inputItem}>
                <Icon active name='person-outline' />
                <Input placeholder='Type your name' onChangeText={name => this.setState({ name })}
                value={this.state.name}/>
              </Item> 
              <Item style={styles.inputItem}>
                <Icon active name='phone-portrait-outline' />
                <Input placeholder='Type your mobile number' onChangeText={mobile_number => this.setState({ mobile_number })}
                value={this.state.mobile_number}/>
              </Item>
              <Item style={styles.inputItem}>
                <Icon active name='map' />
                <Input placeholder='Type your address' onChangeText={address => this.setState({ address })}
                value={this.state.address}/>
              </Item>
              <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={styles.pickerItem}
                placeholder="Select your Blood group"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.blood_group}
                onValueChange={this.onbloodgroupChange.bind(this)}
              >
                <Picker.Item label="A+" value="A+" />
                <Picker.Item label="A-" value="A-" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="B-" value="B-" />
                <Picker.Item label="AB+" value="AB+" />
                <Picker.Item label="AB-" value="AB-" />
                <Picker.Item label="O+" value="O+" />
                <Picker.Item label="O-" value="O-" />
              </Picker>
            </Item>
              <Button full rounded success style={styles.postBtn} onPress={this.handlePost}>
                <Text>Post</Text>
                <Icon active name='exit-outline' />
              </Button>
              <Button full rounded danger style={styles.homeBtn} onPress={() => this.props.navigation.navigate('Main')}>
                <Text>Go to Home</Text>
                <Icon active name='person-add-outline' />
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
      color: 'red',
      fontSize: 26,
      marginBottom: 10
    }, 
    inputItem: {
      borderColor: '#FF5722',
      margin: 10,
      color: 'white',
    },
    pickerItem: {
      borderColor: '#FF5722',
      width: Dimensions.get('screen').width,
      margin: 10,
    },
    postBtn: {
      margin: 10,
    },
    homeBtn: {
      marginLeft: 10,
      marginRight: 10,
    },
  })