import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

function Todo(props) {
    
    const onPressTodo = (item) => {
        props.onPress(item);
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => onPressTodo(props.item)}>
                    <Text style={styles.text}>{props.item.item}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => props.onDelete()}>
                <Icon name='delete' size={25} color='red' />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 30,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10
    },
})

export default Todo;