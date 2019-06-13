import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import firebase from 'react-native-firebase';

import { Header, Card, CardSection, Button } from './common';
import { regEmailChange, regPasswordChange, regNameChange } from '../actions/actions';

class RegistrationForm extends React.Component {
  _onChangeName(text) {
    // console.log(text);
    this.props.regNameChange(text);
  }

  _onChangeEmail(text) {
    this.props.regEmailChange(text);
  }

  _onChangePassword(text) {
    this.props.regPasswordChange(text);
  }

  _onPress() {
    const { email, password } = this.props;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('ContentScreen');
      })
      .catch(function(error) {
        console.log(error.message);

      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Name'}
            value={this.props.email}
            onChangeText={(text) => this._onChangeName(text)}
            value={this.props.name}
          />
        </CardSection>
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
            Create account
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
    name: state.reg.name,
    email: state.reg.email,
    password: state.reg.password
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    regEmailChange,
    regPasswordChange,
    regNameChange
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
