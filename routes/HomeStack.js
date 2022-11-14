import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../components/Comment/CommentList'
import ReviewComment from '../components/Comment/ReviewComment'

const screens = {
    Home :{
        screen : Home,
        navigationOptions :{
            title : 'Commentaires'
        }
    } ,

    ReviewComment : {
        screen : ReviewComment,
        navigationOptions :{
            title : 'Review Comment'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions : ({navigation}) => {
        // headerTintColor : '#444'
        return {
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name='menu'  
                    size={30}  
                />  
            )  
        }
    }
});

export default createAppContainer(HomeStack)
