import React, { Component } from 'react'
import {  StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Drawer from './components/Drawer'
import Authentication from './components/Menu/Authentication/Authentication';
import ChangeInfo from './components/Menu/ChangeInfo/ChangeInfo';
import OrderHistory from './components/Menu/OrderHistory/OrderHistory';
import Header from './components/Header';
import CustomHeader from './components/CustomHeader'
StatusBar.setHidden(true);
export default class extends Component {
    render() {
        const StackNav = createStackNavigator({
            Drawer: {
                screen: Drawer,
                navigationOptions: ({ navigation }) => ({
                    header: <Header navigation={navigation} />
                })
            },
            Authentication: {
                screen: Authentication,
                navigationOptions : ({navigation}) =>({
                    header : <CustomHeader navigation={navigation}/>
                })
            },
            ChangeInfo: {
                screen: ChangeInfo,
                navigationOptions : ({navigation}) =>({
                    header : <CustomHeader navigation={navigation}/>
                })
            },
            OrderHistory: {
                screen: OrderHistory,
                navigationOptions : ({navigation}) =>({
                    header : <CustomHeader navigation={navigation}/>
                })
            }
        })
        const { navigation } = this.props;
        return (
            <StackNav navigation={navigation} />
        )
    }
}
