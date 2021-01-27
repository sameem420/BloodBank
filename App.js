/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Text, Button, Icon } from 'native-base';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container style={styles.body}>
        <Header />
        <Content>
          <Form>
            <Item style={styles.inputItem}>
              <Icon active name='person-outline' />
              <Input placeholder='Type your username'/>
            </Item>
            <Item style={styles.inputItem}>
              <Icon active name='key-outline' />
              <Input placeholder='Type your password' secureTextEntry={true} />
            </Item>
            <Button full rounded success style={styles.loginBtn}>
              <Text>Login</Text>
              <Icon active name='exit-outline' />
            </Button>
            <Button full rounded primary style={styles.registerBtn}>
              <Text>Register</Text>
              <Icon active name='person-add-outline' />
            </Button>
          </Form>
        </Content>
      </Container>
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
