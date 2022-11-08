import { View, StyleSheet, Text, Button} from "react-native"
import { useState } from 'react'

function ReviewComment({navigation}){
    return(
        <View>
            <Text>Review Comment</Text>
            <Text>{navigation.getParam('name')}</Text>
            <Text>{navigation.getParam('email')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Button title="Edit"/> 
            <Button title="Delete"/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ReviewComment;