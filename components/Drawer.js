
import {createDrawerNavigator} from 'react-navigation'
import newTabbar from './newTabbar'
import Menu from './Menu/Menu'
const Drawer = createDrawerNavigator({
    newTabbar : {screen: newTabbar},
},{
    contentComponent: Menu
})
export default Drawer;