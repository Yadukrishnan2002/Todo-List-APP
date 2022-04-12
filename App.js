import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Icon, Image} from 'react-native';


import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Today from './components/Today';
import Upcoming from './components/Upcoming';
import Completed from './components/Completed';

import { Feather } from '@expo/vector-icons';
import TasksToday from './components/TasksToday';
import TasksUpcoming from './components/TasksUpcoming';
import TaskInputScreen from './components/TaskInputScreen';

import { Provider } from 'react-redux';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();





const TabNavigator = () => {



  
  return(
   

    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        right: 5,
        left: 5,
        borderRadius: 20,
        

      }
    }}
    >
      <Tab.Screen name = "Today" component = {Today}  options = {{headerShown: false},{tabBarIcon: () => (<Image source = {require('./assets/icons/todayicon.png')} style={{width: 40, height: 40}} />)}} /> 
      
      <Tab.Screen name = "Upcoming" component = {Upcoming} options = {{headerShown: false},{tabBarIcon: () => (<Image source = {require('./assets/icons/upcomingicon.png')} style={{width: 45, height: 45}} />)}} /> 
      
      <Tab.Screen name = "Completed" component = {Completed} options = {{headerShown: false},{tabBarIcon: () => (<Image source = {require('./assets/icons/completedicon.png')} style={{width: 40, height: 40}} />)}} />
    </Tab.Navigator>
  );

}




const App = (props) => {
  const [taskItems, setTaskItems] = useState([]);


 

  

 

  return (

   <Provider store = {store}>
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "TabNavigator" component = {TabNavigator} options = {{headerShown: false}}/>
        
        <Stack.Screen name = "TaskInputScreen" component = {TaskInputScreen} options = {{headerShown: false}} />

        <Stack.Screen name = "Today" component = {Today} options = {{headerShown: false}}  />


        
        </Stack.Navigator>
      </NavigationContainer>

     
     

   </Provider>
    
    

    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
