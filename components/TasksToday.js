import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

const TasksToday = (props) => {
    
    return(

        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                
                <View style = {styles.taskTitleWrapper}>
                    
                    <Text style = {styles.taskTitle}>{props.text}</Text>
                   
                </View>
               
                
                <View style = {styles.taskTimeWrapper}>
                    <Text style = {styles.taskTimetime}>Time: </Text>
                    <Text style = {styles.taskTimeText}>{props.time}</Text>
                    {/* <Text style = {styles.taskTimeampm}> pm</Text>  */}

                </View>

                {/* <View style = {styles.DateWrapper}>
                    <Text style = {styles.taskDatedate}>Date: </Text>
                    <Text style = {styles.taskDateText}>{props.date}</Text>

                </View> */}

                

            </View>
            <View style = {styles.circular}>
               
               <Image source = {require('../assets/images/circle.png')} style={{width: 45, height: 45}}  />

           </View>


            

            
            

        </View>

    )

}

const styles = StyleSheet.create({
    item: {

        backgroundColor: 'white',
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 33,
        marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    itemLeft: {

        marginLeft: 26,
        marginTop: 8,
        

    },
    taskTitleWrapper: {

        flexDirection: 'row',
        flexWrap: 'wrap',
        

    },

    taskTitle: {

        fontSize: 25,
        marginRight: 50,
        

    },

    taskTimeWrapper: {

        flexDirection: 'row',
        fontSize: 18,
        marginTop: 22,


    },

    taskTimetime: {

        color: 'gray',

    },

    taskTimeText: {

        color: '#00A6DB'

    },

    taskTimeampm: {

        color: 'gray',

    },

    // DateWrapper: {
    //     flexDirection: 'row',
    //     fontSize: 18,
    //     marginTop: 22,
       
        

    // },

    // taskDatedate: {
    //     color: 'gray',
    // },

    // taskDateText: {
    //     color: '#00A6DB',
    //     marginRight: 40,

    // },

    circular: {
        marginTop: 4,
        marginRight: 16,
        paddingRight: 20,

    },
})


export default TasksToday;