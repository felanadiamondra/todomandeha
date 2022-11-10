import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import shortid from 'shortid';
import { useState } from 'react';

function AddTodo(props){
    const [todo , setTodo] = useState();

    const handleAddTask = () =>{
        console.log(todo);
        props.onSubmit({
            id: shortid.generate(),
            item : todo
        });
    }

    return (
        <KeyboardAvoidingView style={styles.writeTodoWrapper}>
            <TextInput style={styles.input} defaultValue={todo} placeholder={'Doing ...'} onChangeText={text => setTodo(text)}/>
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addTodo}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    writeTodoWrapper : {
        position : 'absolute',
        bottom : 60,
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
        width : 60,
        height : 60,
        backgroundColor : '#fff',
        borderRadius : 60,
        justifyContent : 'center',
        alignItems : 'center',
        borderColor : '#c0c0c0',
        borderWidth : 1
    }

})

export default AddTodo;