import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { removeTodo } from './Slice';
import { useDispatch, useSelector } from 'react-redux';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TaskTemplate = (props) => {
    const dispatch = useDispatch()
    const [newHeight,setNewHeight] = useState(100)
    
    useEffect(()=> {
        if(props.task.length >=50)
        {
            height= setNewHeight(((props.task.length/50)* 35))
        }
        
    },[]);


    
return (
<View style={[styles.container,{height:newHeight}]}>
    <View style={styles.id}><Text style={{color:'white'}}>{props.id}</Text></View>
    <View style={styles.task}><Text style={{color:'white'}}>{props.task}</Text></View>
    <View style={styles.delete}>
    <TouchableOpacity onPress={()=> dispatch(removeTodo(props.id - 1))}>
    <MaterialIcons name="delete-outline" size={24} color="white" />
    </TouchableOpacity>
    </View>




</View>
);
};

const styles= StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:screenWidth-50,
        backgroundColor:'#2c2c2c',
        borderRadius:20,
        margin:3,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
    },
    task:{
        width:(screenWidth-50)/10*8
    },
    id:{
        width:(screenWidth-50)/10
    },
    delete:{
        width:(screenWidth-50)/10
    }
})

export default TaskTemplate;