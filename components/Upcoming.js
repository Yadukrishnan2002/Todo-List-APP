import React, {useState, useEffect} from "react";
import { View ,Text, StyleSheet, Button, ScrollView, TouchableOpacity} from "react-native";
import TasksUpcoming from "./TasksUpcoming";
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {connect, useSelector} from 'react-redux';
import * as ActionTypes from '../store/actionTypes';

const Upcoming = (props) => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  const [Tasks,setTasks] = useState([]);
  const [TodayDate, setTodayDate] = useState();



  const isFocused = useIsFocused(); //this is used because to get the screen refreshed automatically when the user switches to this screen
      console.log(props.user.taskName);
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

        let itemsCopy = [...Tasks];
        console.log(Tasks[index].taskitemTitle)

        let NowCompletedTaskName = Tasks[index].taskitemTitle;
        let NowCompletedTaskDate = Tasks[index].taskitemDate;
        let NowCompletedTaskTime = Tasks[index].taskitemTime;

        props.completedTask(NowCompletedTaskName, NowCompletedTaskDate, NowCompletedTaskTime);

        itemsCopy.splice(index,1);

        setTasks(itemsCopy);

        

       }
    


    return(
        <View style = {styles.container}>
            <ScrollView>
            {/* Upcoming Tasks */}
            <View style = {styles.tasksWrapper}>
                <View style = {styles.sectionTitleWrapper}>
                    <Text style = {styles.sectionTitle}>Upcoming Tasks</Text>

                </View>
               
            </View>

            {
              Tasks.map((items,index) => {
                if(TodayDate == items.taskitemDate)
                {
                  Tasks.splice(index,1);
                }
              })
            }

            

            <View style = {styles.items}>
                        {
                          Tasks.map((items,index) => {
                            return (
                              <TouchableOpacity key = {index} onPress = {() => completeTask(index)}>

                                  <TasksUpcoming text = {items.taskitemTitle} time = {items.taskitemTime} date = {items.taskitemDate}  />
                             
                              </TouchableOpacity>
                            )
                          })

                        }
               
            </View>


            
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </ScrollView>
            
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
export default connectComponent(Upcoming);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        marginBottom: 100,

    },
    tasksWrapper: {
   
    


    },

    sectionTitleWrapper: {
        

        backgroundColor: 'white',
        paddingTop: 50,
        paddingLeft: 29,
        paddingBottom: 26,
        paddingRight: 70,
        borderRadius: 30,

    },


    sectionTitle: {

        fontSize: 30,
        fontWeight: 'bold',

    },

    items: {
        
        marginTop: 20,
    },

})


