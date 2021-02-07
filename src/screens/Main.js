import React from 'react';
import 'react-native-gesture-handler';
import { Container, H1, H3, Card, CardItem, Body, Button, Icon } from 'native-base';
import { ScrollView, Image, Dimensions, ImageBackground, View,Text, StyleSheet } from 'react-native';
import { firebaseAuth } from '../../environment/config';
import { firebaseDB } from '../../environment/config';

const postsRef = firebaseDB.child('postsInfo');

export default class Main extends React.Component {
        state = { 
          currentUser: null,
          errorMessage: null,
          donorsData : [] 
        }
    onPressButton = async () => {
      await firebaseAuth.signOut()
      .then(() => this.props.navigation.navigate('Login'))
      .catch(error => this.setState({ errorMessage: error.message }));
  }
  componentDidMount() {
    const { currentUser } = firebaseAuth;
    this.setState({ currentUser });
     postsRef.on('value', snapshot => {
      // snapshot.forEach(snap => {
      //   let postsInfo = snap.val();
      //   let data = [...this.state.donorsData, postsInfo];
        this.setState({ donorsData : Object.values(snapshot.val()) });
    });
}

render() {
  const { currentUser } = this.state
  const { donorsData } = this.state
  console.log(donorsData);
  console.log("length of array ",donorsData.length);
  const DonorsDetail = () => donorsData.map((post,index) => {
    return (
      <Card key={index} style={{ 
        width: Dimensions.get('screen').width,
        }}>
        <CardItem header bordered>
            <H1>Donor Number : {post.mobile_number}</H1>
        </CardItem>
        <CardItem bordered>
          <Body>
            <H3>Donor Name : {post.name}</H3>
            <H3>Donor Address : {post.address}</H3>
            <H3>Donor Blood-Group : {post.blood_group}</H3>
          </Body>
        </CardItem>
      </Card>
    )
    })
  
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
      <ScrollView>
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
            <DonorsDetail />
        </Container>
      </ScrollView>
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
},
donorBtn: {
  margin: 5,
  color: 'white',
},
acceptorBtn: {
  margin: 5,
  color: 'white',
},
})