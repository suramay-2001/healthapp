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
            pulsestatus: 'Normal'
        }
        
    }
    render() {
        if(this.props.pulseshow){
        return (
            <Card>
                <Card.Title>
                    Pulse Status
                </Card.Title>
                <Card.Divider>
                    <Text>{this.state.pulsestatus} </Text>
                </Card.Divider>
            </Card>
        )
        }
        else{
            return(
                <Card>
                    <Card.Title>Recent Pulse History</Card.Title>

                </Card>
            )
        }
    }
}
