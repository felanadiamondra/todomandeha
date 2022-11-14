import { View, StyleSheet, Text, Button} from "react-native"
import { useState } from 'react'

function ReviewComment({navigation}){

    const pressHandler = () =>{
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <View style={styles.commentView}>
                <Text>{navigation.getParam('name')}</Text>
                <Text>{navigation.getParam('email')}</Text>
                <Text>{navigation.getParam('body')}</Text>
            </View>
            <View style={styles.buttonView}>
                <Button style={styles.button} title="Edit"/>
                <Button title="Go back" onPress={pressHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    } , 
    commentView  : {

    },
    buttonView : {
        paddingVertical : 10
    },
    button :{
        marginVertical : 10
    }
})

export default ReviewComment;