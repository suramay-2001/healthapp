import React, { Component } from 'react'
import {StyleSheet,Dimensions,View,Text,ScrollView,TextInput,TouchableOpacity} from 'react-native'
import {Button,Card} from 'react-native-elements';
import ThemedDialog from 'react-native-elements/dist/dialog/Dialog';
import ThemedListItem from 'react-native-elements/dist/list/ListItem';
import Icon from "react-native-vector-icons/FontAwesome5";
export default class Pulse extends Component {
    constructor(props){
        super(props)
        this.state={
            pulsestatus: 'Normal',
            history:[
                {'time':'1 hour ago', 'status':'arythmic'},
                {'time':' 2 hours ago', 'status':'fast'},
                {'time':'10 hour ago', 'status':'normal'},
                {'time':'1 day  ago', 'status':'slow'},
                {'time':'1 week ago', 'status':'critical'},
            ]
        }
        
    }

    printhistory(){
        let arr=[]
        for ( let i of this.state.history){
            console.log(i.time)
            arr.push(
                <View style={styles.pulseview}>
                    <Text style={styles.text}>{'Time:  '+i.time}</Text>
                    <Text style={styles.text}>{'Status:   '+i.status}</Text>
                </View>

            )
        }
        return arr
    }
    render() {
        if(this.props.pulseshow){
        return (
            <Card>
                <Card.Title>
                    Pulse Status
                </Card.Title>
                <Card.Divider>
                    <Text style={styles.cardtext}>{this.state.pulsestatus} </Text>
                </Card.Divider>
            </Card>
        )
        }
        else{
            return(
                <Card>
                    <Card.Title>Recent Pulse History</Card.Title>
                    {this.printhistory()}

                </Card>
            )
        }
    }
}
const styles=StyleSheet.create(
    {
        text:{
            margin: 6,
            textAlign: 'center',
            fontSize:15
        },
        cardtext:{
            margin: 6,
            textAlign: 'center',
            fontSize:18
        },
        pulseview:{
            padding:10,
            textAlign: 'justify',
            borderColor:'black',
            borderRadius:5,
            borderWidth: 1,
            margin:6
        }
    }
)
