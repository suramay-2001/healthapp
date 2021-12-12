import React from "react";

import LoginView from "./LoginView";
import SignupView from "./SignupView";
import Homepage from "./Profilecomponents/Homepage";
import Wearable from "./Wearcomps/Wearable";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

class App extends React.Component {
  MainViewStack = () => {}
  constructor(props) {
    super(props);

    this.state = {
      accessToken: undefined,
      username: undefined,
      activities:[] ,
    };

    this.login = this.login.bind(this);
    this.revokeAccessToken = this.revokeAccessToken.bind(this);
    this.Mytabs=this.Mytabs.bind(this);
    
  }
 
  /**
   * A callback function to store username and accessToken in the state
   * This callback function is passed to `LoginView`
   *
   * @param {string} username
   * @param {string} accessToken
   */
  login(username, accessToken) {
    this.setState({
      username: username,
      accessToken: accessToken,
    });
  }

  /**
   * Revokes the access token in the state, so that the user is logged out
   *
   */
  revokeAccessToken() {
    this.setState({
      accessToken: undefined,
    });
  }

  

  Mytabs(){
    var BottomTab=createBottomTabNavigator();
    console.log(this.state.activities)
    return (
      
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={(props)=>(<Homepage
    {...props}
    username={this.state.username}
    accessToken={this.state.accessToken}
    revokeAccessToken={this.revokeAccessToken}
  />)} />
  <BottomTab.Screen name="Wearable" component={(props)=>(<Wearable
    {...props}
    username={this.state.username}
    accessToken={this.state.accessToken}
    revokeAccessToken={this.revokeAccessToken}
  />)} />
        {/* <BottomTab.Screen name="Today" component={(props)=>(<TodayView
    {...props}
    username={this.state.username}
    accessToken={this.state.accessToken}
    revokeAccessToken={this.revokeAccessToken}
    setactivities={this.setactivities}
  />)} />

<BottomTab.Screen name="Excersises" component={(props)=>(<ExercisesView
    {...props}
    username={this.state.username}
    accessToken={this.state.accessToken}
    revokeAccessToken={this.revokeAccessToken}
    activities={this.state.activities}
  />)} />

<BottomTab.Screen name="Meals" component={(props)=>(<MealView
    {...props}
    username={this.state.username}
    accessToken={this.state.accessToken}
    revokeAccessToken={this.revokeAccessToken}
    activities={this.state.activities}
  />)} /> */}
      </BottomTab.Navigator>
      
    );
  }


  /**
   * Defines a stack navigator for three screens, LoginView, SignupView, and ProfileView.
   *
   * We define the navigator to show only LoginView and SignupView if user is not logged in ('this.state.accessToken' does not exist)
   * and show ProfileView if the user is logged in (this.state.accessToken exists)
   *
   * See https://reactnavigation.org/docs/auth-flow/ for more details on the authentication flow.
   *
   * @returns `NavigationContainer`
   */
  render() {
    const AuthStack = createStackNavigator();
    return (
      <NavigationContainer>
        <AuthStack.Navigator>
          {!this.state.accessToken ? (
            <>
              <AuthStack.Screen
                name="SignIn"
                options={{
                  title: "MobiHealth Welcome",
                }}
              >
                {(props) => <LoginView {...props} login={this.login} />
                }
                
              </AuthStack.Screen>
              <AuthStack.Screen
                name="SignUp"
                options={{
                  title: "MobiHealth Signup",
                }}
              >
                {(props) => <SignupView {...props} />}
              </AuthStack.Screen>
            </>
          ) : (
            <AuthStack.Screen
              name="MobiHealth"
              options={{
                title: "MobiHealth",
                headerLeft:()=>(
                  <Button  title='sign out' onPress={
                      this.revokeAccessToken
          
                  }/>

                )

                
              }}
              component={this.Mytabs}
            >
              {/* {(props) => (
                <ProfileView
                  {...props}
                  username={this.state.username}
                  accessToken={this.state.accessToken}
                  revokeAccessToken={this.revokeAccessToken}
                />
              )} */
              }
            </AuthStack.Screen>
          )}
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
