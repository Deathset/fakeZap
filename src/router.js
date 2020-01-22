
import { createStackNavigator } from "react-navigation-stack"
import {createAppContainer} from "react-navigation"

import TelaInicial from './paginas/TelaInicial'
import TelaMensagem from './paginas/TelaMensagem'

const AppNavigation = createStackNavigator(
{
   Telainicio :TelaInicial,
   TelaMsg: TelaMensagem
},
{
    initialRouteName:'Telainicio'
}
   ) 

export default createAppContainer(AppNavigation)