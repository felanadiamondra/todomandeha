import { StyleSheet, View, Text, 
         SafeAreaView , TouchableOpacity, 
         Modal, FlatList, TextInput } from 'react-native'
import { useState } from 'react'
import Todo from './Todo';
const DATA = [
    { id : 1 , item: 'Item one'},
    { id : 2, item: 'item two'},
    { id : 3 , item : 'item three'},
    { id : 4 , item : 'item four'}
]
function TodoList(){

    const [data , setData] = useState(DATA)
    const [isRender , setIsRender] = useState(false);
    const [isModalVisible , setIsModalVisible] = useState(false);
    const [inputText , setInputText] = useState();
    const [editItem , setEditItem] = useState();


    const renderItem = ({item , index}) =>{
        return(
            <TouchableOpacity
            style={styles.item}
            onPress={() => onPressItem(item)}>
                <Text style={styles.text}>{item.item}</Text>
            </TouchableOpacity>
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

    return(
        <SafeAreaView>
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
            <FlatList data={data}
                      keyExtractor={(item) => item.id.toString()}
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
    header :{
        fontSize : 24,
        fontWeight : 'bold'
    },
    todoitem : {

    },
    footer :{
        position : 'absolute',
        bottom : 0
    },

    item: {
        borderBottomWidth : 1,
        borderBottomColor : 'grey',
        alignItems : 'flex-start'
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