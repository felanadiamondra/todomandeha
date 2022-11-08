import { StyleSheet , View, Text } from "react-native"

export default function Comment(props){
    return(
        <View style={styles.container}>
            <Text style={styles.item_name}>{props.coms.name}</Text>
            <Text style={styles.item_mail}>{props.coms.email}</Text>
            <Text style={styles.item_body}>{props.coms.body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding : 20,
        borderRadius : 10,
        backgroundColor : '#f5f5f5',
        margin : 10
    },
    item_name:{
        color : '#52b2bf',
        fontWeight: 'bold'
    },
    item_mail:{
        color : "#787276"
    }
})