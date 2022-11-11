import { StyleSheet, View, Text, 
         SafeAreaView , TouchableOpacity, 
         Modal, FlatList, TextInput, KeyboardAvoidingView } from 'react-native'
import { useState } from 'react'
import AddTodo from './AddTodo';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [
    { id : 1 , item: 'Todo'},
    { id : 2, item: 'Another todo'}
]

function TodoList(){

    const [data , setData] = useState(DATA)
    const [isRender , setIsRender] = useState(false);
    const [isModalVisible , setIsModalVisible] = useState(false);
    const [inputText , setInputText] = useState();
    const [editItem , setEditItem] = useState();
    const [taskItems , setTaskItem] = useState([]);
    const [selected , setSelected] = useState("");
    const [searchItem, setSearchItem] = useState("");

    const renderItem = ({item , index}) =>{
        return(
            <View style={styles.listItem}>
                <View style={{flex : 1}}>
                    <TouchableOpacity
                    style={styles.item}
                    onPress={() => onPressItem(item)}>
                        <Text style={styles.text}>{item.item}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                    <Icon name='delete' size={25} color='red'/>
                </TouchableOpacity>
            </View>
        )
    }

    const handleEditItem = () =>{
        const newData = data.map(item => {
            if(item.id == editItem){
                item.item = inputText;
                return item ; 
            }
            return item ; 
        })
        setData(newData);
        setIsRender(!isRender);
    }

    const onPressSaveEdit = () =>{
        handleEditItem(editItem);
        setIsModalVisible(false);
    }

    const onPressItem = (item) => {
        setIsModalVisible(true);
        setInputText(item.item);
        setEditItem(item.id);
    }

    const handleSubmit = (todo) =>{
        setData([...data , todo]);
    }

    const deleteTodo = (todoId) => {
        const newTodo = data.filter(item => item.id != todoId);
        setData(newTodo);
    }

    return(
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.container}>
            <View style={styles.todoWrapper}>
                <Text style={styles.header}> Todo </Text>
                <View style={styles.todoitem}>
                    <Todo text='Todo 1'/>
                    <Todo text='Todo 2'/>
                </View>
            </View>

            <View style={styles.footer}>

            </View>
        </View> */}
            <TextInput value=''/>
            
            <FlatList data={data}
                      contentContainerStyle={{padding : 20, paddingBottom:100}}
                      // keyExtractor={(item) => item.id.toString()}
                      renderItem={renderItem} 
                      extraData={isRender}/>
            
            <Modal animationType='fade'
                   visible={isModalVisible}
                   onRequestClose={() => setIsModalVisible(false)}>
                    <View style={styles.modalView}>
                        <Text style={styles.text}>  Change Text : </Text>
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
            <View style={styles.footer}>
                <AddTodo onSubmit={handleSubmit}/>
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#E8EAED'
    },

    todoWrapper :{
        paddingHorizontal : 20,
        paddingTop : 80
    },

    footer :{
        position : 'absolute',
        bottom : 0,
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal: 20
    },

    // item: {
    //     borderBottomWidth : 1,
    //     borderBottomColor : 'grey',
    //     alignItems : 'flex-start'
    // },
    listItem : {
        padding : 20,
        backgroundColor : '#fff',
        flexDirection : 'row',
        elevation : 12,
        borderRadius : 7,
        marginVertical : 10
    },
    text : {
        marginVertical : 30,
        fontSize : 25,
        fontWeight : 'bold',
        marginLeft : 10
    },
    textInput: {
        width : '90%',
        height : 70,
        borderColor : 'grey',
        borderWidth : 1,
        fontSize : 25
    } , 

    modalView : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    } , 

    touchableSave : {
        backgroundColor : 'orange',
        paddingHorizontal : 100,
        alignItems : 'center',
        marginTop : 20
    }
})

export default TodoList;