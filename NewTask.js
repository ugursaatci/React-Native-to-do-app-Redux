import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity,StatusBar} from 'react-native';
import {Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './Slice';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const NewTask = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const [height, setHeight] = useState(50)
    
    useEffect(()=> {
     console.log(content)
    })

    const handleContentSizeChange = (e) => {
        setHeight(e.nativeEvent.contentSize.height);
    };
    const handleAddToDo= () => {
        dispatch(addTodo(content));
        setContent('');
        navigation.navigate('Home')
    };
    
    
return (
<View style={styles.container}>
<StatusBar style="auto" />
    <View styles={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddToDo}>
        <AntDesign name="save" size={24} color="#FFA500" />
        </TouchableOpacity>
    </View>
    <View style={styles.inputContainer}>
        <TextInput
                style={[styles.input, { height: Math.max(50, height) }]}
                multiline={true}
                textAlignVertical="top"
                value={content}
                onChangeText={setContent}
                placeholder='Add a Task'
                onContentSizeChange={handleContentSizeChange}
                placeholderTextColor="#2c2c2c"
                
        />
    </View>




</View>
);
};

const styles= StyleSheet.create({
    container:{
        height:screenHeight+100,
        alignItems:'center',
        backgroundColor:'#000000'
    },
    input:{
        backgroundColor:'#eaeaea',
        width:screenWidth-50,
        borderRadius:20,
        fontSize:18,
        backgroundColor:'#000000',
        color:'white',
        fontWeight:'bold'
        
        
    },
    button:{
        marginTop:10,
        width:screenHeight/5,
        height:50,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',   
    },
    buttonText:{
        color:'white'
    },
    buttonContainer:{
        width:screenWidth,
        height:100,
        flex:1
    },
    inputContainer:{
        marginTop:10,
        flex:9
    },
})

export default NewTask;