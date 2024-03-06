import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TaskTemplate from './TaskTemplate';
import {Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo,removeTodo } from './Slice';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Home = () => {
    const navigation = useNavigation();
    const todos = useSelector((state) => state.todos);
return (
  
<View style={styles.container}>
    <View style={styles.taskContainer}>
    <ScrollView>
            {todos.map((todo, index) => (
                        <TaskTemplate id={index + 1} task={todo} />
                    ))}

        

    </ScrollView>
    </View>
    
    <View style={styles.newTaskContainer}>
        <TouchableOpacity style={styles.newTask} onPress={() => {navigation.navigate('NewTask')}}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    </View>
    
</View>
);
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
        
    },
    taskContainer:{
        marginTop:20,
        height:screenHeight,
        zIndex:1,
        width:screenWidth,
        justifyContent:'center',
        alignItems:'center'

    },
    newTask:{
        width:50,
        height:50,
        backgroundColor:'#FFA500',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    plus:{
        color:'white',
        fontSize:30
    },
    newTaskContainer:{
        
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:20,
        zIndex:20,
        height:50,
        marginTop:-75
        
        
    }

})

export default Home;