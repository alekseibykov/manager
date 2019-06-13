import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, TextInput } from 'react-native';
import { Header, Card, CardSection, Button } from './common';

class LoginForm extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Card>
        <CardSection>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Email@gmail.com'}
          />
        </CardSection>
        <CardSection>
          <TextInput
            style={styles.inputStyle}
            secureTextEntry
            placeholder={'Password'}
          />
        </CardSection>
        <CardSection>
          <Button>
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

export default LoginForm;
