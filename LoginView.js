import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import base64 from "base-64";
import {Card} from 'react-native-elements';

class LoginView extends React.Component {
  constructor() {
    super();

    // Initializes username and password states which will be used for TextInputs
    this.state = {
      username: "",
      password: "",
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  /**
   * Sends a request to the `/login` endpoint.
   *
   * Stores accessToken if login was successful,
   * which will automatically navigate user to ProfileView (See authentication flow in App.js)
   *
   */
  handleLogin() {
    
     let accesstoken='123trf'
     this.props.login('sur',accesstoken)
  }

  /**
   * Handler for Signup button. Navigates user to SignupView.
   *
   */
  handleSignup() {
    this.props.navigation.navigate("SignUp");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>MobiHealth</Text>
        <Text>Hello! Sign up to continue</Text>
        <View style={styles.space} />
        <Card styles={{padding:10,backgroundcolor:'#F6F2D4'}}>
          <Card.Title>Enter Details</Card.Title>
          <Card.Divider>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter Username"
          placeholderTextColor="#992a20"
          onChangeText={(username) => this.setState({ username: username })}
          value={this.state.username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#992a20"
          onChangeText={(password) => this.setState({ password: password })}
          value={this.state.password}
          autoCapitalize="none"
        />
        <View style={styles.space} />
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Button
            color="#000"
            style={styles.buttonInline}
            title="Login"
            onPress={this.handleLogin}
          />
          <View style={styles.spaceHorizontal} />
          <Button
            color="#000"
            style={styles.buttonInline}
            title="Signup"
            onPress={this.handleSignup}
          />
        </View>
        </Card.Divider>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6DDC4",
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 5,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  spaceHorizontal: {
    display: "flex",
    width: 20,
  },
  buttonInline: {
    display: "flex",
  },
  input: {
    width: 200,
    padding: 10,
    margin: 5,
    height: 40,
    borderColor: "#c9392c",
    borderWidth: 1,
  },
});

export default LoginView;
