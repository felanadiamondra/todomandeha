import { StyleSheet, Text, FlatList, View, TouchableOpacity, ScrollView } from 'react-native'
import {useState, useEffect} from 'react'
import Comment from './Comment';

function CommentList ({navigation}){
    const [isLoading, setLoading]= useState(false);
    const [comments, setComments] = useState([]);

    const getAllComments = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json) => setComments(json))
        .catch((error) => console.log(error))
        .finally(()=>setLoading(false));
    }

    useEffect(() =>{
        setLoading(true);
        getAllComments();
    }, [])
    
    const onPress = () =>{
        navigation.navigate('ReviewComment', item)
    }

    const addComment = async(name, email, body) =>{
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
        .then((response) =>{
            if(response.status !== 201){
                return;
            }
            else{
                return response.json();
            }}).then((data) =>{
                setComments((comments) => [...comments, data]);
            }).catch((error) => console.log(error));
        }

        const editComment = async(id, name, email, body) =>{
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

    const deleteComment = async(id) =>{
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

    return(
        <View>
            {
                isLoading ? <Text> Loading ... </Text> :
                <FlatList 
                    data={comments}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewComment', item)}>
                            <Comment coms={item}/>
                        </TouchableOpacity>
                    )}>
                </FlatList>
            }
        </View>
    )
}

const styles = StyleSheet.create({
})

export default CommentList;