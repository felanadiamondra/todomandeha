import { StyleSheet , View, Text,Button } from "react-native"

export default function Comment(props){
    const editComment = (commentId) =>{
        props.onEdit(commentId)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.item_name}>{props.coms.name}</Text>
            <Text style={styles.item_mail}>{props.coms.email}</Text>
            <Text style={styles.item_body}>{props.coms.body}</Text>
            <View style={styles.buttonView}>
                <Button style={styles.button} title="Edit" onPress={editComment(props.coms.id)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding : 20,
        borderRadius : 10,
        backgroundColor : '#f5f5f5',
        marginVertical : 10
    },
    item_name:{
        color : '#52b2bf',
        fontWeight: 'bold'
    },
    item_mail:{
        color : "#787276"
    },
    buttonView : {
        margin : 30
    },
    button : {
        margin:30
    }
})