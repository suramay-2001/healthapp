import React, { Component } from 'react'
import {StyleSheet,Dimensions,View,Text,ScrollView,Modal,TextInput,TouchableOpacity} from 'react-native'
import {Button,Card} from 'react-native-elements';
import ThemedDialog from 'react-native-elements/dist/dialog/Dialog';
import ThemedListItem from 'react-native-elements/dist/list/ListItem';
import Icon from "react-native-vector-icons/Fontisto";
export default class Pulse extends Component {
    constructor(props){
        super(props)
        this.state={
           
        }
        
    }
    render() {
        
        return (
            <Card>
                <Card.Title>
                    Quick Call
                </Card.Title>
                <Card.Divider>
                    <Card >
                        <TouchableOpacity>
                        <Card.Title>Doctor</Card.Title>
                        <Card.Divider>
                            <View style={{justiftyContent:"center", alignItems:"center"}}>
                            <Icon 
                            name='doctor'
                            size={30}
                            color='black'
                            style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                            />
                            </View>
                        </Card.Divider>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Card.Title>CareTaker</Card.Title>
                        <Card.Divider>
                            <View style={{justiftyContent:"center", alignItems:"center"}}>
                            <Icon 
                            name='nurse'
                            size={30}
                            color='black'
                            />
                            </View>
                        </Card.Divider>
                        </TouchableOpacity>
                    </Card>
                    
                </Card.Divider>
            </Card>
        )
       
    }
}