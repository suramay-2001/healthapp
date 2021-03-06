import React, { Component } from 'react'
//import CircularProgress from 'react-native-circular-progress-indicator';
import {StyleSheet,Dimensions,View,Text,ScrollView,SafeAreaView,TextInput,TouchableOpacity} from 'react-native'
import {Button,Card} from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
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
            <SafeAreaView style={styles.container}>
           <ScrollView>
               {/* <CircularProgress
  value={60}
  activeStrokeWidth={12}
  textColor={'#ecf0f1'}
/> */}
<View style={styles.batteryview}>
    <Icon 
    name='battery-60'
    size={60}
    color='black'
    style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
    />
    <Text style={styles.cardtext}> {' '+this.state.battery +' %'}</Text>

</View>
              
               <Card>
                   <Card.Title>Device Health</Card.Title>
                   <Card.Divider>
                       <Text style={styles.cardtext}> {this.state.health}</Text>
                   </Card.Divider>


               </Card>
               <Card>
                   <Card.Title>Contact Support</Card.Title>
                   <Card.Divider>
                       <Text style={styles.cardtext}>{this.state.support}</Text>
                   </Card.Divider>

               </Card>
               
                  
            

           </ScrollView>
           </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E6DDC4",
      },
      batteryview:{
        padding:10,
        textAlign: 'justify',
        margin:6,
        justifyContent:"center",
         alignItems:"center"
    },
    cardtext:{
        margin: 6,
        textAlign: 'center',
        fontSize:18
    },
})
