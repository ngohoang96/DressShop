import React, { Component } from 'react'
import { View,Text,TouchableOpacity,StyleSheet,ImageBackground,Dimensions} from 'react-native'
const width = Dimensions.get('window');
const height = Dimensions.get('window');
export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state= {user:'true'}
        this.onSignOut.bind(this)
    };
    
    onSignOut() {
        this.setState({ user: null });
    }
    render() {
        const {navigation} = this.props;
        const { 
            container, profile, btnStyle, btnText, 
            btnSignInStyle, btnTextSignIn, loginContainer,
            username
        } = styles;
        const logoutJSX = (
                <View style = {{flex: 1}}>
                    <View>
                        <TouchableOpacity   
                        style={btnStyle}
                        onPress = {()=> navigation.navigate('Authentication')}>
                            <Text style={btnText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>     
        );
        const loginJSX = ( 
            <View>
                <TouchableOpacity onPress = {()=> navigation.navigate('OrderHistory')} >
                    <Text>OrderHistory Component</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=> navigation.navigate('ChangeInfo')} >
                    <Text>ChangeInfo Component</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={()=> this.onSignOut()}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
              
            </View>
        )
        const {user} = this.state;
        const mainJSX = this.state.user ? loginJSX : logoutJSX;
        return (
           <View>
               {mainJSX}
           </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper:{
        
    },
    btnText: {
        color: '#4469B0',
        fontFamily: 'Avenir', 
        fontSize: 20
    },
    btnStyle:{
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70

    },
    btnTextSignIn:{
        color: '#4469B0',
        fontSize: 15
    }
})