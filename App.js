import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'react-native-firebase';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import mainReducer from './src/reducers';
import AppNavigator from './src/AppNavigator';

const store = createStore(mainReducer);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
      <Provider store={ store }>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
