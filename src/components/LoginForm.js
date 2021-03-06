import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import firebase from 'react-native-firebase';
import { StyleSheet, Platform, Image, Text, View, ScrollView, TextInput } from 'react-native';

import { Header, Card, CardSection, Button } from './common';
import { emailChange, passwordChange } from '../actions/actions';

class LoginForm extends React.Component {
  _onChangeEmail(text) {
    this.props.emailChange(text);
  }

  _onChangePassword(text) {
    this.props.passwordChange(text);
  }

  _onPress() {
    const { email, password } = this.props;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('ContentScreen');
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }

  render() {
    // console.log(this);
    const {navigate} = this.props.navigation;
    return (
      <Card>
        <CardSection>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Email@gmail.com'}
            onChangeText={(text) => this._onChangeEmail(text)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <TextInput
            style={styles.inputStyle}
            secureTextEntry
            placeholder={'Password'}
            onChangeText={(text) => this._onChangePassword(text)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this._onPress.bind(this)}>
            Login
          </Button>
          <Button onPress={() => navigate('RegistrationForm')}>
            Registration
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    password: state.login.password
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    emailChange,
    passwordChange
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
