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
            falls: 2
        }
        
    }
    render() {
        if(this.props.fallshow){
        return (
            <Card>
                <Card.Title>
                    Detected Falls
                </Card.Title>
                <Card.Divider>
                    <Text>{this.state.falls} </Text>
                </Card.Divider>
            </Card>
        )
        }
        else{
            return(
                <Card>
                    <Card.Title>Suspected Falls History</Card.Title>

                </Card>
            )
        }
    }
}