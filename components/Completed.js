import React, { useState, useEffect } from "react";
import { View,Text, StyleSheet, Image, Button, Alert,Pressable} from "react-native";
import TasksCompleted from "./TasksCompleted";
import {connect, useSelector} from 'react-redux';
import * as ActionTypes from '../store/actionTypes';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


const Completed = (props) => {


    const refreshScreen = () => {
        console.log("Refreshed");
    }

    const[CompletedTasks, setCompletedTasks] = useState([]);

    

     const DeleteCompletedTasks = (variable) => {

        
        
        //CompletedTasks.splice(0,CompletedTasks.length);

        let itemsCopy = [...CompletedTasks];
        itemsCopy.splice(0,itemsCopy.length);

        setCompletedTasks(itemsCopy);
        
        
        

      }

      const createTwoButtonAlert = () =>
        Alert.alert(
        "Clear Completed Tasks",
        "Are you sure you want clear all the completed Tasks ?",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "Yes", onPress: () => DeleteCompletedTasks('clearall') }
        ]
        );


     

    const isFocused = useIsFocused(); 

    useEffect(() => {

        if(props.user.completedTaskName !='')
        {
            // setTasks([...Tasks,props.user.taskName]);
            // setTaskDate([...taskDate, props.user.date]);
            // setTaskTime([...taskTime, props.user.time]);

            
            let nObj = {CompletedTaskItemTitle: props.user.completedTaskName, CompletedTaskItemDate: props.user.completedDate, CompletedTaskItemTime: props.user.completedTime};
            

            //the above will create a key value pairs

           let arr2 = CompletedTasks.concat(nObj);
            
           
            //The above code will store the data as key value pairs in 'arr' just like it will get stored in 'Tasks' array
            
            setCompletedTasks(arr2);

            // Finally we are adding our key value pairs into our original 'Tasks' array  
            


            props.user.completedTaskName = ''
            props.user.completedDate = ''
            props.user.completedTime = ''
        }

        
        // let allTasksCopy = [...props.user.allTasks];
        // setTasks(allTasksCopy);


        // var doubleData = Tasks.map(function(task, i) {
        //     return [task, taskTime[i]];
        //   });
        
        // console.log(Tasks);
        // console.log(taskDate);
        // console.log(taskTime);
        // console.log("rendered");
        
        
        
        
       },[isFocused]);


       

    return(
        <View style = {styles.container}>
            {/* Completed Tasks */}
            <View style = {styles.tasksWrapper}>
                <View style = {styles.sectionTitleWrapper}>
                    <Text style = {styles.sectionTitle}>Completed Tasks</Text>

                    <View style = {styles.deleteIcon}>
                             {/* <TouchableOpacity onPress={createTwoButtonAlert}>
                                <Image source = {require('../assets/icons/delete1.png')} style={{width: 30, height: 30}} /> 


                            </TouchableOpacity> */}

                           
                            <Pressable style={styles.button} onPress={createTwoButtonAlert}>
                                <Image source = {require('../assets/icons/delete1.png')} style={{width: 30, height: 30}} /> 
                            </Pressable>
                            
                            
                    </View> 

                    
                    
                   
                       

                </View>
               
                           

                
                
               
            </View>

            

           
                        

               

            

            <ScrollView>

                <View style = {styles.items}>
                           
                            
                             {
                                CompletedTasks.map((items,index) => {

                                    return(
                                        <TasksCompleted key = {index} text = {items.CompletedTaskItemTitle} date = {items.CompletedTaskItemDate} time = {items.CompletedTaskItemTime} /> 


                                    )
                    
                                })
                            } 

                
                </View>

            </ScrollView>

            

            
        </View>
    );
}


const mapStateToProps = (state) => ({user: state.user});

const mapDispatchToProps = (dispatch) => ({
   

    completedTask: (NowCompletedTaskName, NowCompletedTaskDate, NowCompletedTaskTime) => dispatch({

        type: ActionTypes.COMPLETED_TASKS, payload: {NowCompletedTaskName, NowCompletedTaskDate, NowCompletedTaskTime}

    }),
   
});

const connectComponent = connect(mapStateToProps,mapDispatchToProps);
export default connectComponent(Completed);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',

    },
    tasksWrapper: {
   
    


    },

    sectionTitleWrapper: {
        

        backgroundColor: 'white',
        paddingTop: 50,
        paddingLeft: 20,
        paddingBottom: 26,
        borderRadius: 30,
        flexDirection: 'row',

        
        

    },


    sectionTitle: {

        fontSize: 30,
        fontWeight: 'bold',
        flexDirection: "row",

    },

    items: {
        
        marginTop: 20,
       
    },

    deleteIcon: {
        
        marginLeft: 40,
        paddingTop: 10,
        

    },

    clearTasks: {
        
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12

    },

})


