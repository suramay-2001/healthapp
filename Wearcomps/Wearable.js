import React, { Component } from 'react'
//import {CircularProgress} from 'react-native-circular-progress-indicator';
import {StyleSheet,Dimensions,View,Text,ScrollView,Modal,TextInput,TouchableOpacity} from 'react-native'
import {Button,Card} from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5";
export default class Wearable extends Component {
    constructor(props){
    super(props)
    this.state={
        battery:66,
        health:'normal',
        support:'8883338483'
    }
    }
    render() {
        return (
           <ScrollView>
               <View>

                   <Text>{this.state.battery+'%'}</Text>
               </View>

               <Card>
                   <Card.Title>Device Health</Card.Title>
                   <Card.Divider>
                       <Text> {this.state.health}</Text>
                   </Card.Divider>


               </Card>
               <Card>
                   <Card.Title>Contact Support</Card.Title>
                   <Card.Divider>
                       <Text>{this.state.support}</Text>
                   </Card.Divider>

               </Card>
               
                  
               {/* <CircularProgress
  value={60}
  activeStrokeWidth={12}
  textColor={'#ecf0f1'}
/> */}

               <Text>Hello world</Text>

           </ScrollView>
        )
    }
}
