
import { createStackNavigator } from "react-navigation-stack"
import {createAppContainer} from "react-navigation"

import TelaInicial from './pages/TelaInicial'
import TelaMessage from './pages/TelaMensagem'
import TelaContatos from './pages/TelaContatos'

const AppNavigation = createStackNavigator(
{
   TelaInicial,
   TelaMessage,
   TelaContatos
},
{
    initialRouteName:'TelaInicial',
}
) 

export default createAppContainer(AppNavigation)