import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

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

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)
