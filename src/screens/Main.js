import React from 'react';
import 'react-native-gesture-handler';
import { Container, Right, H2, H3, Card, CardItem, Body, Button, Icon } from 'native-base';
import { ScrollView, Image, Dimensions, ImageBackground, SafeAreaView,Text, StyleSheet } from 'react-native';
import { firebaseAuth } from '../../environment/config';
import { firebaseDB } from '../../environment/config';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

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
        fontFamily: "Cairo-Regular",
        backgroundColor: 'gray'
        }}>
        <CardItem header bordered>
            <H2 style={{fontFamily: "Cairo-Regular",padding: 5}}><FontAwesome name="phone" size={20} color="black"/> {post.mobile_number}</H2>
        </CardItem>
        <CardItem bordered>
          <Body>
            <H3 style={{fontFamily: "Cairo-Regular",padding: 5}}><MaterialIcons name="person-pin" size={20} color="black"/> {post.name}</H3>
            <H3 style={{fontFamily: "Cairo-Regular",padding: 5}}><Entypo name="location-pin" size={20} color="black" /> {post.address}</H3>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Right>
            <H3 style={{fontFamily: "Cairo-Regular", padding: 5}}><Fontisto name="blood" size={20} color="black" /> {post.blood_group}</H3>
          </Right>
        </CardItem>
      </Card>
    )
    })
  
  return (
    <Container>
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
        {/* <Container style={styles.container}>
          <Button full rounded success style={styles.donorBtn} onPress={() => this.props.navigation.navigate('Donor')}>
            <Text>Be a Donor</Text>
            <Icon active name='person-add-outline' />
          </Button>
          <Button full rounded style={styles.acceptorBtn} onPress={this.handleSignUp}>
            <Text>Request for Blood</Text>
            <Icon active name='exit-outline' />
          </Button>
        </Container> */}
        <Container style={styles.postsContainer}>
            <DonorsDetail/>
        </Container>
      </ScrollView>
    </ImageBackground>
    </Container>
  )}
}
const styles = StyleSheet.create({
container: {
 flex: 1,
 fontFamily: "Cairo-Regular",
},
postsContainer: {
  flex: 1,
  alignItems: 'center',
  fontFamily: "Cairo-Regular",
},
donorBtn: {
  margin: 5,
  color: 'white',
  fontFamily: "Hind-Regular",
},
acceptorBtn: {
  margin: 5,
  color: 'white',
  fontFamily: "Hind-Regular",
},
})