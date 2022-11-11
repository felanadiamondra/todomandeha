import { View, KeyboardAvoidingView, 
    Text, TextInput, TouchableOpacity,
     StyleSheet, Modal , Button} from 'react-native'
import shortid from 'shortid';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown';


function AddTodo(props){
    const [todo , setTodo] = useState();
    const [priority, setPriority] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const priorities = ['High' , 'Medium', 'Low'];

    const handleAddTask = () =>{
        setIsModalVisible(true);
    }

    const closeModal = () =>{
        setIsModalVisible(false);
    }

    const onSubmitTask = () =>{
        props.onSubmit({
            id: shortid.generate(),
            item : todo
        });
        setTodo("");
        setIsModalVisible(false);
    }
    return (
        <KeyboardAvoidingView style={styles.writeTodoWrapper}>
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                    {/* <Text style={styles.addTodo}>+</Text> */}
                    <Icon name='add' size={30}/>
                </View>
            </TouchableOpacity>
            <Modal animationType='fade'
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}>
                <View style={styles.modalView}>
                    <TextInput style={styles.input} defaultValue={todo} placeholder={'Doing ...'} onChangeText={text => setTodo(text)}/>
                    <SelectDropdown data={priorities} onSelect={(selectedItem, index)=>{
                    console.log(selectedItem, index);
                    }}/>
                    <Button title="Add" onPress={onSubmitTask}/> 
                    <Button title="Close" onPress={closeModal}/>
                </View>
            </Modal>
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
    }, 
    modalView:{
       flex : 1,
       alignItems : 'center',
       justifyContent : 'center' 
    }

})

export default AddTodo;