import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {Card} from 'react-native-elements';
class SignupView extends React.Component {
  constructor() {
    super();

    // Initialize username and password states for TextInputs
    this.state = {
      username: "",
      password: "",
    };

    this.handleCreateAccount = this.handleCreateAccount.bind(this);
    this.backToLogin = this.backToLogin.bind(this);
  }

  /**
   * Handler for Create Account button.
   * Creates an account by sending a POST request to the `/users` endpoint.
   *
   */
  handleCreateAccount() {
    fetch("http://cs571.cs.wisc.edu:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "User created!") {
          // Signup success!
          alert(JSON.stringify(res.message));
          this.props.navigation.navigate("SignIn"); // navigate to the LoginView
        } else {
          // Signup failure
          alert(JSON.stringify(res.message));
        }
      });
  }

  /**
   * Handler for Nevermind! button. Navigates back to the LoginView.
   */
  backToLogin() {
    this.props.navigation.navigate("SignIn");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>MobiHealth</Text>
        <Text>Glad to have you here!</Text>
        <Text>Please create an account below.</Text>
        <View style={styles.space} />
        <Card styles={{padding:10,backgroundcolor:'#F6F2D4'}}>
        <Card.Title>Enter Details</Card.Title>
        <Card.Divider>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Username"
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
          onChangeText={(password) => this.setState({ password: password })}
          value={this.state.password}
          placeholderTextColor="#992a20"
          autoCapitalize="none"
        />
        <View style={styles.space} />
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Button
            color="#000"
            style={styles.buttonInline}
            title="Create Account"
            onPress={this.handleCreateAccount}
          />
          <View style={styles.spaceHorizontal} />
          <Button
            color="#000"
            style={styles.buttonInline}
            title="Sign in"
            onPress={this.backToLogin}
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

export default SignupView;
