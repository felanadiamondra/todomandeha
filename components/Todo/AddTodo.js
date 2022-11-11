import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import shortid from 'shortid';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


function AddTodo(props){
    const [todo , setTodo] = useState();

    const handleAddTask = () =>{
        props.onSubmit({
            id: shortid.generate(),
            item : todo
        });
        setTodo("");
    }

    return (
        <KeyboardAvoidingView style={styles.writeTodoWrapper}>
            <TextInput style={styles.input} defaultValue={todo} placeholder={'Doing ...'} onChangeText={text => setTodo(text)}/>
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                    {/* <Text style={styles.addTodo}>+</Text> */}
                    <Icon name='add' size={30}/>
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
        borderWidth : 1,
        elevation : 40
    }

})

export default AddTodo;