import { createStackNavigator } from "react-navigation-stack";
import TodoList from "../components/Todo/TodoList";

const screens = {
    Todo : {
        screen : TodoList, 
        navigationOptions : {
            title : 'Todo App'
        }
    }
}

const TodoStack = createStackNavigator(screens , {
    defaultNavigationOptions : {
        headerTintColor : '#444'
    }
});

export default TodoStack;