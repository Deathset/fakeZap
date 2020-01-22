
import { createStackNavigator } from "react-navigation-stack"
import {createAppContainer} from "react-navigation"

import TelaInicial from './pages/TelaInicial'
import TelaMensagem from './pages/TelaMensagem'
import TelaContatos from './pages/TelaContatos'

const AppNavigation = createStackNavigator(
{
   TelaInicial,
   TelaMensagem,
   TelaContatos
},
{
    initialRouteName:'TelaInicial'
}
) 

export default createAppContainer(AppNavigation)