import React from 'react'
import {createBottomTabNavigator} from 'react-navigation';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Home from './Home/Home'
import {createStackNavigator} from 'react-navigation'
import { Image } from 'react-native'
import ProductDetail from './Home/ProductDetail/ProductDetail';
import ListProduct from './Home/ListProduct/ListProduct';
const StackHome = createStackNavigator({
    Home : {screen :Home },
    ListProduct : {screen : ListProduct,
        
    
    },
    ProductDetail : {screen : ProductDetail}},{
        
        headerMode: "none",
})
const newTabbar = createBottomTabNavigator ({
    Home : {screen : StackHome ,       

        navigationOptions: {
            tabBarIcon: param => {
                if(param.focused) {return <Image  style={{ width: 25, height: 25 }} source={require('../img/icon/homeactive.png')}/>}
                else {return <Image  style={{ width: 25, height: 25 }} source={require('../img/icon/homeinactive.png')}/>}    
            }
        }
    },
    Cart : {screen : Cart},
    Search : {screen : Search},
    Contact : {screen : Contact}},{
        tabBarOptions: {
            showLabel : false,
            Animation: true,
            
        }
})
export default newTabbar;