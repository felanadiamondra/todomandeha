import { View, StyleSheet, Text, TextInput,
        Button, Modal, TouchableOpacity} from "react-native"
import { useState } from 'react'

function ReviewComment({navigation}){
    const [isModalVisible , setIsModalVisible] = useState(false);
    const [inputText , setInputText] = useState();
    const [inputEmail , setInputEmailText] = useState();
    const [inputName , setInputNameText] = useState();
    const BLUE = '#428AF8';
    const LIGHT_GRAY = '#D3D3D3';
 
    const pressHandler = () =>{
        navigation.goBack();
    }

    
    return(
        <View style={styles.container}>
            <View style={styles.commentView}>
            <TextInput style={styles.textInput}
                onChangeText={(text) => setInputNameText(text)}
                defaultValue={navigation.getParam('name')}
                selectionColor={BLUE}
                // underlineColorAndroid={
                //     isFocused ? BLUE : LIGHT_GRAY
                // }
                editable={false}
                multiline={false}
                maxLength={200}/>

            <TextInput style={styles.textInput}
                onChangeText={(text) => setInputEmailText(text)}
                defaultValue={navigation.getParam('email')}
                editable={false}
                multiline={false}
                maxLength={200}/>

            <TextInput style={styles.textInput}
                onChangeText={(text) => setInputText(text)}
                defaultValue={navigation.getParam('body')}
                editable={false}
                multiline={true}
                numberOfLines={10}
                maxLength={1000}/>
            </View>
            <View style={styles.buttonView}>
                <Button style={styles.button} title="Go back" onPress={pressHandler}/>
            </View>
            <Modal animationType='fade'
                   visible={isModalVisible}
                   onRequestClose={() => setIsModalVisible(false)}>
                    <View style={styles.modalView}>
                        <TextInput style={styles.textInput}
                                onChangeText={(text) => setInputText(text)}
                                defaultValue={inputText}
                                editable={true}
                                multiline={false}
                                maxLength={200}/>
                        <TouchableOpacity
                          onPress={() => onPressSaveEdit()}
                          style={styles.touchableSave}>
                              <Text style={styles.text}>Save</Text>
                        </TouchableOpacity>
                    </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingTop:23
        // flex : 1,
        // alignItems : 'center',
        // justifyContent : 'center'
    } ,
    touchableSave : {
        backgroundColor : 'orange',
        // paddingHorizontal : 100,
        alignItems : 'center',
        marginTop : 20
    },
    textInput: {
        height : 50,
        paddingLeft : 6,
        margin: 15
    },
    buttonView :{
        margin: 30
    },
    button :{
        margin : 30
    }
})

export default ReviewComment;