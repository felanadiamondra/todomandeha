import { useState } from 'react'
import shortid from 'shortid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet,KeyboardAvoidingView, TouchableOpacity, Modal, View, TextInput, Button} from 'react-native'

function AddComment(){
    const [comment,setComment] = useState();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleAddComment = () =>{
        setIsModalVisible(true);
    }

    const closeModal = () =>{
        setIsModalVisible(false);
    }

    const onSubmitComment = () =>{
        props.onSubmit({
            id: shortid.generate(),
            name : name,
            email :email,
            body : comment
        });
        setComment("");
        setIsModalVisible(false);
    }

    return(
        <KeyboardAvoidingView style={styles.writeCommentWrapper}>
            <TouchableOpacity onPress={() => handleAddComment()}>
                <View style={styles.addWrapper}>
                    {/* <Text style={styles.addTodo}>+</Text> */}
                    <Icon name='add' size={30}/>
                </View>
            </TouchableOpacity>
            <Modal animationType='fade'
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}>
                <View style={styles.modalView}>
                    <TextInput style={styles.input} defaultValue={comment} placeholder={'Comment'} onChangeText={text => setComment(text)}/>
                    <TextInput style={styles.input} defaultValue={name} placeholder={'Comment'} onChangeText={text => setName(text)}/>
                    <TextInput style={styles.input} defaultValue={email} placeholder={'Comment'} onChangeText={text => setEmail(text)}/>
                    <Button title="Add" onPress={onSubmitComment}/> 
                    <Button title="Close" onPress={closeModal}/>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    writeCommentWrapper : {
        position : 'absolute',
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center'
    },
    input:{
        paddingHorizontal : 15,
        paddingVertical : 15,
        backgroundColor : '#fff',
        borderRadius : '#c0c0c0',
        borderWidth : 1,
        width : 250
    },
    addWrapper : {
        position: 'absolute',
        justifyContent: 'center',
        top: 390,
        right:20,
        height:70,
        width : 60,
        height : 60,
        backgroundColor : '#fff',
        borderRadius : 60,
        justifyContent : 'center',
        alignItems : 'center',
        borderColor : '#c0c0c0',
        borderWidth : 1,
        elevation : 40,
        zIndex:2
    }, 
    modalView:{
       flex : 1,
       alignItems : 'center',
       justifyContent : 'center' 
    }, 
})

export default AddComment;