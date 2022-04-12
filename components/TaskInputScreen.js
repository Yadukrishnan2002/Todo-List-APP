import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, Platform, Touchable, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView,  TouchableOpacity } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import Upcoming from './Upcoming';
import DatePicker from 'react-native-date-picker'

import {connect} from 'react-redux';


import * as ActionTypes from '../store/actionTypes';

const height = Dimensions.get('window').height;
const width  = Dimensions.get('window').width;

const TaskInputScreen = (props) => {


        // const [tasks,setTask] = useState();


        // const fetchTasksAsync = async() => {

        //     setTask(tasks);
        //     console.log("eh")
        //     props.updateTasks(tasks);
        // }

        // useEffect(() => {
        //     console.log("HEllo")
        //     fetchTasksAsync();
        // })

    
//      const [date, setDate] = useState(new Date());
//      const [mode, setMode] = useState('date');
//      const [show, setShow] = useState(false);
//      const [text,setText] = useState('Empty');
//      const [textTime,setTextTime] = useState('Empty');

//      const [date1, setDate1] = useState(new Date());
//      const [open, setOpen] = useState(false)


     

//      const onChange = (event, selectedDate) => {
//          const currentDate = selectedDate || date;
//          setShow(Platform.OS == 'ios');
//          setDate(currentDate);


//          let tempDate = new Date(currentDate);
//          let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();

//          let fTime = 'Hours: ' + tempDate.getHours() + ' |Minutes: ' + tempDate.getMinutes();
//          setText(fDate)
//          setTextTime(fTime)
//          console.log(fDate + ' ( ' + fTime + ')')
       
         
//      }

//     const showMode = (currentMode) => {
//          setShow('false')
//          setMode(currentMode);

//      }


//      const [date2, setDate2] = useState(new Date());
//      const [mode2, setMode2] = useState('time');
//      const [show2, setShow2] = useState(false);
   
//      const onChange2 = (event, selectedDate2) => {
//         const currentDate2 = selectedDate2 || date2;
//         setShow2(Platform.OS == 'ios');
//         setDate2(currentDate2);


//         // let tempDate = new Date(currentDate);
//         // let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();

//         // let fTime = 'Hours: ' + tempDate.getHours() + ' |Minutes: ' + tempDate.getMinutes();
//         // setText(fDate)
//         // setTextTime(fTime)
//         // console.log(fDate + ' ( ' + fTime + ')')
      
        
//     }

//    const showMode2 = (currentMode2) => {
//         setShow2('false')
//         setMode2(currentMode2);

//     }


    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text,setText] = useState();
    const [textTime,setTextTime] = useState();
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
      
      let hours = tempDate.getHours();
      let am_pm = 'am'

      if(hours>11)
      {
        am_pm = 'pm';

        if(hours>12)
        {
            hours = hours - 12;
        }
      }

      if(hours == 0)
      {
          hours = 12;
      }


      let fTime = hours + ' : ' + tempDate.getMinutes() + ' ' + am_pm;
      setText(fDate)
      setTextTime(fTime)
    //   console.log(fDate + ' ( ' + fTime + ')')

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
  

   

    


    //  const handleAddTask = () => {

    //      setTaskItems([...props.taskItems,tasks]);

    //      setTask(null);

    //  }

    const [taskTitle, setTaskTitle] = useState();
    const [TodayDate, setTodayDate] = useState();

    const [taskDate, setTaskDate] = useState();

    const [taskTime, setTaskTime] = useState();


    // addTodo = (text) => {
    //         //redux store

    //         this.props.dispatch({type: 'ADD_TODO',text})
    //         this.setState({text: ''})
    // }

    const functionsToBeCalledOnPress = () => {

        
        //navigation.state.params.addTask({taskTitle});
       // navigation.goBack();



    //    navigation.navigate({
    //     name: 'Today',
    //     params: { taskitem: taskTitle },
    //     merge: true,
    //   });

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var CurrentDate = date + '/'+ month + '/' + year

        setTodayDate(CurrentDate);
        console.log("Current date: ",CurrentDate);
        
        props.addTask(taskTitle,text,textTime);

        if(CurrentDate == text)
        {
            props.navigation.goBack();
        }
        else{
            console.log("textdate: ", text)
            console.log("todaydate: ",TodayDate);
            props.navigation.navigate('Upcoming');
        }
        
        
        

    }


    return(
        <View style = {styles.container}> 

            <View style ={styles.headingWrapper}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image source = {require('../assets/images/back.png')} style={{width: 35, height: 35}} />
            </TouchableOpacity>
             
             <Text style = {styles.headingText}>Create New Task</Text>
            
            </View>

            <ScrollView>
            <View style = {styles.InputWrapper}>
           
                <KeyboardAvoidingView>
                    <View style = {styles.TaskInputWrapper}>
                        <Text style ={styles.TaskInputText}>What is to be done?</Text>
                        <TextInput style = {styles.Input} placeholder = {'Write a Task'}  onChangeText ={(text)=>setTaskTitle(text)} ></TextInput>

                    </View>
                    <Text>{props.user.taskName}</Text>

                    

                   

                    <View style = {styles.TaskDateAndTime}>
                        <View style = {styles.DateWrapper}>
                            <Text style = {styles.DateText}>Date: </Text>
                            <View style = {styles.DateAndTimeShower} >

                            <TouchableOpacity style={{ flex: 1}} onPress={showDatepicker}>
                                 <TextInput style = {styles.DateBackground}>
                                    hellowo
                                </TextInput>
                            </TouchableOpacity>
                            <Text style = {styles.DateDisplay}>{text}</Text>

                            
                            
                            {/* { show && (
                                    <DateTimePicker 
                                     
                                    testID = 'dateTimePicker'
                                    value = {date}
                                    mode = 'date'
                                    is24Hour = {true}
                                    display = 'default'
                                    onChange = {onChange}
                                   
                                    />
                            )}  */}

                            </View>


                            
                            


                          

                               
                   

                           
                            <TouchableOpacity onPress={showDatepicker} style ={styles.DateImage}>
                            <Image source = {require('../assets/images/calender.png')} style={{width: 35, height: 35}} />
                                
                  
                            </TouchableOpacity>
                            

                        </View>
                        {console.log(date)}
                        

                        <View style = {styles.TimeWrapper}>

                            <Text style = {styles.TimeText}>Time: </Text>
                            <View style = {styles.TimeShower} >

                                    <TouchableOpacity style={{ flex: 1}} onPress={showTimepicker}>
                                            <Text style = {styles.DateBackground}>
                                                hellowo
                                            </Text>

                                        </TouchableOpacity>

                                        <Text style = {styles.TimeDisplay}>{textTime}</Text>

                                     {/* { show && (
                                            <DateTimePicker 
                                            
                                            testID = 'dateTimePicker1'
                                            value = {date2}
                                            mode = 'time'
                                            is24Hour = {true}
                                            display = 'default'
                                            onChange = {onChange2}
                                            />
                                    )}  */}
                            </View>
                                

                                        <TouchableOpacity onPress={showTimepicker} style ={styles.DateImage}>
                                                <Image source = {require('../assets/images/clock.png')} style={{width: 35, height: 35}} />
                                                    
                                    
                                        </TouchableOpacity>


                                            {show && (
                                                    <DateTimePicker
                                                    testID="dateTimePicker"
                                                    value={date}
                                                    mode={mode}
                                                    is24Hour={false}
                                                    display="default"
                                                    onChange={onChange}
                                                    />
                                                )}
                        </View>

                        

                        


                    </View>

                   
                   

                    
                    


                </KeyboardAvoidingView>
               
                
               

                

                                                     
            </View>

             
           </ScrollView>

           
            <TouchableOpacity onPress={functionsToBeCalledOnPress} >
      
                    <View style = {styles.DoneWrapper}>
                        <View style = {styles.DoneBackground}>
                            <View style = {styles.TickImage}>
                                <Image source = {require('../assets/images/doneTick.png')} style={{width: 65, height: 65}} />
                            </View>
                        </View>
                        

                    </View>
                </TouchableOpacity>
            
            

        </View>
        
    )
}

const mapStateToProps = (state) => ({user: state.user});


const mapDispatchToProps = (dispatch) => ({
    
    addTask: (taskName,text,textTime) => dispatch({
        
        type: ActionTypes.ADD_TASK,
         payload: {taskName,text,textTime }, 
    }),
   
});

const connectComponent = connect(mapStateToProps,mapDispatchToProps);
export default connectComponent(TaskInputScreen);





const styles = StyleSheet.create({

    container: {

        backgroundColor: 'white',
        position: 'absolute',
        height: height,
        width: width,

    },


    headingWrapper: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 50,
        paddingLeft: 29,
        paddingBottom: 26,
        paddingRight: 75,
        borderRadius: 30,
        justifyContent: 'flex-end',
        
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

    },

    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
        
        
        
    },
    InputWrapper: {
       // backgroundColor: 'white',
        
       

    },
    TaskInputWrapper: {
        padding: 50,
    },
    TaskInputText: {
        
        fontSize: 24,
    },
    Input: {
        fontWeight: 'bold',
        marginTop: 25,
        fontSize: 28,
        borderBottomColor: '#000', // Add this to specify bottom border color
        borderBottomWidth: 1
    },
    TaskDateAndTime: {
        paddingTop: 20,
        padding: 50,
    },
    DateWrapper: {
        flexDirection: 'row',
    },
    DateText: {
        fontSize: 25,

    },
    DateDate: {
        fontSize: 25,
        borderBottomColor: '#000', // Add this to specify bottom border color
        borderBottomWidth: 1
    },
    TimeWrapper: {
        flexDirection: 'row',
        marginTop: 50,
    },
    TimeText: {
        fontSize: 25,
    },
    TimeTime: {
        fontSize: 25,
        borderBottomColor: '#000', // Add this to specify bottom border color
        borderBottomWidth: 1
    },
    DoneWrapper: {

        paddingBottom: height - 850,
        paddingLeft: width - 100,
       

    },
    DoneBackground: {
        width: 85,
        height: 85,
        borderRadius: 60,
        backgroundColor: '#00D1FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        
        
        
       
        
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    
        elevation: 10,

    },

    TickImage: {


    },

    DateImage: {

        paddingLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    
        elevation: 10,


    },

    DateAndTimeShower: {

       

        width: 125,
        borderBottomColor: '#000', // Add this to specify bottom border color
        borderBottomWidth: 1
        
        

        

        

        
    }, 
    
    DateBackground: {
        position: 'absolute',
        marginBottom: 40,
        fontSize: 35,
        color: 'transparent',
        
    },

    TimeShower: {

        width: 125,
        borderBottomColor: '#000', // Add this to specify bottom border color
        borderBottomWidth: 1,
        


    },

    DateDisplay: {
        fontSize: 20,
        color: '#00A6DB',

    },

    TimeDisplay: {

        fontSize: 20,
        color: '#00A6DB',

    },
    
})

// const mapStateToProps = state => state;
// const mapDispatchToProps = dispatch => ({
//     updateTasks: tasks => dispatch({type: Types.UPDATE_TASKS, payload: {
//         tasks
//     }})
// });
// const connectComponent = connect(mapStateToProps,mapDispatchToProps);


