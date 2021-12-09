import React, { Component } from 'react'
import {StyleSheet,Dimensions,View,Text,ScrollView,Modal,TextInput,TouchableOpacity} from 'react-native'
import {Button,Card} from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5";
import Pulse from './Pulse';
import Falls from './Falls';
import Call from './Call';
export default class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={
            heartrate:72,
            detectedfalls:2,
            pulseshow:true,
            fallshow:true,
        }
        this.setpulsestate=this.setpulsestate.bind(this)
    }
    setpulsestate=()=>{
        this.setState({pulseshow: !this.state.pulseshow})
    }
    setfall=()=>{
        this.setState({fallshow: !this.state.fallshow})
    }
    render() {
        return (
            <ScrollView>
                <Card>
                    <Card.Title>
                        Heart Rate 
                    </Card.Title>
                    <Card.Divider>
                        <Icon 
                        name='heartbeat'
                        size={50}
                        color='red'
                        />
                        <Text>{this.state.heartrate}</Text>
                        </Card.Divider>
                </Card>
                <Card>
                    <Card.Title>
                        Recent Activity
                    </Card.Title>
                    <Card.Divider>
                        <TouchableOpacity
                        onPress={this.setpulsestate}
                        >
                        <Pulse pulseshow={this.state.pulseshow}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={this.setfall}
                        >
                        <Falls fallshow={this.state.fallshow}/>
                        </TouchableOpacity>
                       
                        <Call fallshow={this.state.fallshow}/>
                        

                        </Card.Divider>
                </Card>

            </ScrollView>
           
        )
    }
}
