import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import TodoList from "../components/Todo/TodoList";

import HomeStack from "./HomeStack";
import TodoStack from "./TodoStack";

const RootDrawerNavigator = createDrawerNavigator({
    Home :{
        screen: HomeStack
    } , 
    Todo : {
        screen : TodoStack
    }
});

const AppSwitchNavigator = createSwitchNavigator({
    Home : {screen : RootDrawerNavigator},
    Todo : {screen : TodoList}
})

// export default createAppContainer(RootDrawerNavigator)
export default createAppContainer(AppSwitchNavigator);