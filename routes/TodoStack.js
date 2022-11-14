import { createStackNavigator } from "react-navigation-stack";
import TodoList from "../components/Todo/TodoList";
import Icon from 'react-native-vector-icons/MaterialIcons';

const screens = {
    Todo : {
        screen : TodoList, 
        navigationOptions : {
            title : 'Todo App'
        }
    }
}

const TodoStack = createStackNavigator(screens , {
    defaultNavigationOptions : ({navigation}) => {
        // headerTintColor : '#444'
        return {
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="menu"  
                    size={30}  
                />  
            )  
        }
    }
});

export default TodoStack;