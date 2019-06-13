import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, TextInput } from 'react-native';
import { Header, Card, CardSection, Button } from './common';

class RegistrationForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Name'}
          />
        </CardSection>
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

export default RegistrationForm;
