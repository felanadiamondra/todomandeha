import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeStack from "./HomeStack";
import TodoStack from "./TodoStack";

const RootDrawerNavigator = createDrawerNavigator({
    Home :{
        screen: HomeStack
    } , 
    Todo : {
        screen : TodoStack
    }
})

export default createAppContainer(RootDrawerNavigator)