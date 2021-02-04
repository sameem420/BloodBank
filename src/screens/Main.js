import React from 'react';
import 'react-native-gesture-handler';
import { Container, Header, Content, Form, Item, Input, Text, Button, Icon } from 'native-base';
import { Alert, SafeAreaView, Image, Dimensions, ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native';
import { firebaseAuth } from '../../environment/config';

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
    <ImageBackground source={require("../images/bgImg.jpg")} 
    style={{ resizeMode: "contain", width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}>
      {/* <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
          </Text>
      <View>
        <Button style={styles.signoutBtn}
        onPress={this.onPressButton}
        title="Sign Out"
        />
        </View>
      </View> */}
      <Container style={styles.container}>
        <Button full rounded success style={styles.donorBtn} onPress={() => this.props.navigation.navigate('Donor')}>
          <Text>Be a Donor</Text>
          <Icon active name='person-add-outline' />
        </Button>
        <Button full rounded style={styles.acceptorBtn} onPress={this.handleSignUp}>
          <Text>Request for Blood</Text>
          <Icon active name='exit-outline' />
        </Button>
      </Container>
      <Container style={styles.postsContainer}>
        <Text>Donor post to render here ...</Text>
      </Container>  
    </ImageBackground>
  </>
  )}
}
const styles = StyleSheet.create({
container: {
 flex: 1,
 padding: 5,
 alignItems: 'center'
},
postsContainer: {
  flex: 1,
 padding: 5,
 alignItems: 'center',
 color: 'black',
},
donorBtn: {
  margin: 5,
},
acceptorBtn: {
  margin: 5,
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