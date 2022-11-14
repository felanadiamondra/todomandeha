import { StyleSheet, View, Text, 
         SafeAreaView , TouchableOpacity, 
         Modal, FlatList, TextInput, KeyboardAvoidingView } from 'react-native'
import { useState, useEffect } from 'react'
import AddTodo from './AddTodo';
import Todo from './Todo';


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
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);

    const renderItem = ({item , index}) =>{
        return(
            <View style={styles.listItem}>
                <Todo onDelete={() => deleteTodo(item.id)} item={item} onPress={onPressItem}/>
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
        setData([...data, todo]);
        // setFilteredDataSource([...data , todo]);
    }

    const deleteTodo = (todoId) => {
        const newTodo = data.filter(item => item.id != todoId);
        setData(newTodo);
        // setFilteredDataSource(data);
    }

    const searchFilterFunction = (text) => {
        if (text) {
          const newData = data.filter(function (item) {
            const itemData = item.item
              ? item.item.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          setFilteredDataSource(data);
          setSearch(text);
        }
    };

    useEffect(() => {
        setFilteredDataSource(data);           
    }, []);
    
    return(
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => setSearch(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Search Here"
                />
            
            <FlatList data={data}
                      contentContainerStyle={{padding : 20, paddingBottom:100}}
                      // keyExtractor={(item) => item.id.toString()}
                      renderItem={renderItem} 
                      extraData={isRender}/>
            
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

    listItem : {
        padding : 20,
        backgroundColor : '#fff',
        flexDirection : 'row',
        elevation : 12,
        borderRadius : 7,
        marginVertical : 10
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
    },
    textInputStyle : {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    }
})

export default TodoList;