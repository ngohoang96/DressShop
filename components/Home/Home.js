import React, { Component } from 'react'
import { View,Text,Image ,TouchableOpacity,ScrollView} from 'react-native'
import Category from './Category'
import Collection from './Collection'
import TopProduct from './TopProduct'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            types : [] ,
            topProducts : [],
        }
    }
    componentDidMount = () => {
      fetch('http://localhost/app/')
      .then(res => res.json())
      .then(resJSON =>{
          const {type,product} = resJSON;
          this.setState ( {types:type,topProducts : product})
      })

    }
    
    render() {
        const {navigation} =this.props;
        const {types,topProducts} = this.state;
        return (
          
         <ScrollView style = {{flex : 1, backgroundColor : 'white'}}>
            
             <Collection navigation = {navigation}/>
             <Category navigation = {navigation} types={types} />
             <TopProduct navigation = {navigation} topProducts={topProducts}/>
         </ScrollView>
        )
    }
}