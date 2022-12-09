import { StyleSheet, Text, FlatList, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react'
import Comment from './Comment';
import AddComment from './AddComment';

function CommentList({ navigation }) {
    const [isLoading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);

    const getAllComments = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((json) => setComments(json))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        setLoading(true);
        getAllComments();
    }, [])

    const onPress = () => {
        navigation.navigate('ReviewComment', item)
    }

    const addComment = async (name, email, body) => {
        await fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                body: body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.status !== 201) {
                    return;
                }
                else {
                    return response.json();
                }
            }).then((data) => {
                setComments((comments) => [...comments, data]);
            }).catch((error) => console.log(error));
    }

    const editComment = async (id, name, email, body) => {
        await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                email: email,
                body: body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    const deleteComment = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if (response.status !== 200) {
                return;
            } else {
                setComments(
                    comments.filter((comment) => {
                        return comment.id !== id;
                    })
                );
            }
        })
            .catch((error) => console.log(error));
    }

    const handleSubmit = (comment) => {
        setComments([comment, ...comments])
    }

    const handleEditItem = (commentId) =>{
        const newData = comments.map(item => {
            if(item.id == commentId){
                item.name = inputName;
                item.mail = inputMail;
                item.body = inputText;
                item.id = commentId;
                return item ; 
            }
            return item ; 
        })
        setComments(newData);
    }


    return (
        <View style={styles.container}>
           

            {
                isLoading ? <Text> Loading ... </Text> :

                    <View style={{padding : 20, paddingBottom:100}}>
                        <ScrollView>
                            {comments.map(item =>{
                            return (
                                <TouchableOpacity key={item.id} onPress={() => navigation.navigate('ReviewComment', item )}>
                                    <Comment coms={item} onEdit={handleEditItem}/>
                                </TouchableOpacity>
                            );
                        })}
                        </ScrollView>
                    </View>
            }
             <View style={styles.topbutton}>
                <AddComment onSubmit={handleSubmit} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        zIndex:1
    }
})

export default CommentList;