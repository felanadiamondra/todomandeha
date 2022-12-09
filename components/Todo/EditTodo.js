import { View, Text, TouchableOpacity, 
    Modal, TextInput } from 'react-native'

function EditTodo (){
    const [isModalVisible , setIsModalVisible] = useState(false);
    const [inputText , setInputText] = useState();
    const [editItem , setEditItem] = useState();

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

    return(
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
    )
}

const styles = StyleSheet.create({
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

    textInput: {
        width : '100%',
        height : 70,
        borderColor : 'grey',
        borderWidth : 1,
        fontSize : 25
    } 

})

export default EditTodo;