import React, {useState, useEffect, useLayoutEffect, useRef}  from "react";
import { View,Text, StyleSheet, Image, Button, Alert, Pressable} from "react-native";
import { TouchableOpacity, Dimensions } from "react-native";

import TasksToday from "./TasksToday";

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import TaskInputScreen from "./TaskInputScreen";
import { ScrollView, TapGestureHandler, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { NavigationContainer, useIsFocused } from '@react-navigation/native';

import taskItems from './TaskInputScreen';


import {connect, useSelector} from 'react-redux';
import * as ActionTypes from '../store/actionTypes';


import {refreshScreen} from './Completed';
import Completed from "./Completed";



const {height,width} = Dimensions.get('window');

const Today = (props) => { 

    //const [todos, setToDo] = useState([]);
   
 
    //const { param1, param2 } = route.params;
   
    //let taskItems = require('./TaskInputScreen');

    //const task = navigation.getParam('task');  

    
    const [Tasks, setTasks] = useState([]);
    const [TodayDate, setTodayDate] = useState();

    const [tasktodo,setTasktodo] = useState();

    const [taskDate, setTaskDate] = useState([]);

    const [taskTime, setTaskTime] = useState([]);

    
   
    

    
    

    

    // const addTask = (task) => {
    //     setTasks([...Tasks, task])
    // }
    
    

    //  useEffect(() => {
       
    // if (route.params?.taskitem) {  

          
    //        setTasks([...Tasks,route.params?.taskitem])
          
    //      }

        
    //   }, [route.params?.taskitem]);
    
    const isFocused = useIsFocused(); //this is used because to get the screen refreshed automatically when the user switches to this screen

      
      useEffect(() => {

        if(props.user.taskName !='')
        {
            // setTasks([...Tasks,props.user.taskName]);
            // setTaskDate([...taskDate, props.user.date]);
            // setTaskTime([...taskTime, props.user.time]);

            let nObj = {taskitemTitle: props.user.taskName, taskitemTime: props.user.time, taskitemDate: props.user.date};
            
            //the above will create a key value pairs
            let arr = Tasks.concat(nObj);
           
            //The above code will store the data as key value pairs in 'arr' just like it will get stored in 'Tasks' array
            
            
            setTasks(arr);
            
            

            // Finally we are adding our key value pairs into our original 'Tasks' array  
            


            props.user.taskName = ''
            props.user.date = ''
            props.user.time = ''


            var date = new Date().getDate();
            var month = new Date().getMonth() + 1;
            var year = new Date().getFullYear();
            var CurrentDate = date + '/'+ month + '/' + year

            setTodayDate(CurrentDate);
          

          

            // let temp = [...Tasks];
            // setTodayTasks(arr);          
            

            // let temp = Tasks.filter((item) => item.taskitemDate == TodayDate).map(({taskitemTitle,taskitemDate,taskitemTime}) => ({taskitemTime, taskitemDate, taskitemTime}));
            // console.log("temp ",temp);
            // setTodayTasks(temp);

            // TodayTasks = TodayTasks.filter((item) => item.taskitemDate == TodayDate).map(({taskitemTitle,taskitemDate,taskitemTime}) => ({taskitemTime, taskitemDate, taskitemTime}));
            
          
          
       

        // const temp = Tasks.filter((items) => {
        //        console.log("filter");
        //        if(items.taskitemDate == TodayDate)
        //         {
        //          console.log("matched");
        //            return items;
        //         }
        //    })
        // console.log("today task")
        // setTodayTasks(temp);


       

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

        
        
        
       }, [isFocused]);


       


       const completeTask = (index) => {

        let itemsCopy = [...TodayTasks];
        console.log(TodayTasks[index].taskitemTitle)

        let NowCompletedTaskName = TodayTasks[index].taskitemTitle;
        let NowCompletedTaskDate = TodayTasks[index].taskitemDate;
        let NowCompletedTaskTime = TodayTasks[index].taskitemTime;

        props.completedTask(NowCompletedTaskName, NowCompletedTaskDate, NowCompletedTaskTime);

        itemsCopy.splice(index,1);

        setTasks(itemsCopy);

        

       }

       const TodayTasks = Tasks.filter(tasks => tasks.taskitemDate == TodayDate)

    
    return(

        
        
        
        <View style = {styles.container}>
                    
           

        
            {/* Today's Tasks */}
            <View style = {styles.tasksWrapper}>
                <View style = {styles.sectionTitleWrapper}>
                    <Text style = {styles.sectionTitle}>Today's Tasks</Text>
                   
                </View>
               
            </View>
            <ScrollView>

                <View style = {styles.items}>
                        {/* <TasksToday text = {'Task 1'} />
                        <TasksToday text = {'Task 2'} />
                        <TasksToday text = {'Task 3'} /> */}
                        {/* <TasksToday text = {'task 1'} date ={'today'} time2 = {'now'}/> */}
                        {/* <TasksToday text = {props.user.taskName} /> */}
                        

                    
                   {/* {
                        TodayTasks.map((items,index) => {
                            if(TodayDate !== items.taskitemDate)
                            {
                                TodayTasks.splice(index,1);
                            }
                        })
                    }  */}

                    
                   


                    {
                       TodayTasks.map((items,index) => {
                            
                            
                            return(
                        
                                <TouchableOpacity key = {index} onPress = {() => completeTask(index)}>

                                     <TasksToday text = {items.taskitemTitle} time = {items.taskitemTime} date = {items.taskitemDate}  />
                                    
                                </TouchableOpacity>

                                
                     

                            )
                        })
                       
                    }

                       

                       {/* {
                           taskTime.map((items,index) => {
                            return(
                                <TouchableOpacity key = {index}>
                                    <Timescreen time = {items} />
                                </TouchableOpacity>

                            )
                        })

                       } */}


                       
                       

                       

                    

                       {/* {
                           taskDate.map((items,index) => {
                            return(
                                <TouchableOpacity key = {index}>
                                    <TasksToday date = {items} />
                                </TouchableOpacity>

                            )
                        })


                       }

                       {
                           taskTime.map((items,index) => {
                            return(
                                <TouchableOpacity key = {index}>
                                    <TasksToday time = {items} />
                                </TouchableOpacity>

                            )
                        })
                       } */}

                    {/* {
                        todos.map(todo => <TasksToday text = {todo.label} />)

                    } */}
                       
                       
                      
               
                </View>


                </ScrollView>
            
            <TouchableOpacity onPress={() => props.navigation.navigate('TaskInputScreen', )}>
                
                    <View style = {styles.addBackground}>
                        <View style = {styles.addImage}>
                            <Image source = {require('../assets/images/add.png')} style={{width: 65, height: 65}} />
                        </View>

                    </View>

                
                
            </TouchableOpacity>

            {/*  This is where we enter the tasks */}

          
                
           
            
            
            
        </View>
    );
}


const mapStateToProps = (state) => ({user: state.user});

const mapDispatchToProps = (dispatch) => ({
    addTask: (taskName,text,textTime) => dispatch({
        type: ActionTypes.ADD_TASK, payload: {taskName,text,textTime}, 
    }),

    completedTask: (NowCompletedTaskName, NowCompletedTaskDate, NowCompletedTaskTime) => dispatch({

        type: ActionTypes.COMPLETED_TASKS, payload: {NowCompletedTaskName, NowCompletedTaskDate, NowCompletedTaskTime}

    }),
   
});

const connectComponent = connect(mapStateToProps,mapDispatchToProps);
export default connectComponent(Today);








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
        paddingLeft: 29,
        paddingBottom: 26,
        paddingRight: 109,
        borderRadius: 30,
        
        

    },


    sectionTitle: {

        fontSize: 30,
        fontWeight: 'bold',

    },

    items: {
        
        marginTop: 20,
    },

    addWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        position: 'absolute',

    },

    addBackground: {

    width: 85,
    height: 85,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    


    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
    marginLeft: 290,
    

    
    


    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    },

    addImage: {



    },

    headerBottomSheet: {

        backgroundColor: '#ffffff',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,


    },


})





