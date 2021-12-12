import React, { Component } from 'react'
import {StyleSheet,Dimensions,View,Text,ScrollView,Modal,TextInput,TouchableOpacity} from 'react-native'
import {Button,Card} from 'react-native-elements';
import ThemedDialog from 'react-native-elements/dist/dialog/Dialog';
import ThemedListItem from 'react-native-elements/dist/list/ListItem';
import Icon from "react-native-vector-icons/FontAwesome5";
export default class Pulse extends Component {
    constructor(props){
        super(props)
        this.state={
            falls: 2,
            fallhistory:[{'time':' today 12:00:00', 'time':' 2 days ago at 13:00:00'}]
        }
        
    }
    printhistory(){
        let arr=[]
        for ( let i of this.state.fallhistory){
            console.log(i.time)
            arr.push(
                <View style={styles.pulseview}>
                    <Text style={styles.text}>{'Time:  '+i.time}</Text>
                </View>

            )
        }
        return arr
    }
    render() {
        if(this.props.fallshow){
        return (
            <Card>
                <Card.Title>
                    Detected Falls
                </Card.Title>
                <Card.Divider>
                    <Text style={styles.cardtext}>{this.state.falls} </Text>
                </Card.Divider>
            </Card>
        )
        }
        else{
            return(
                <Card>
                    <Card.Title>Suspected Falls History</Card.Title>
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