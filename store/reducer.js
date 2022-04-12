import * as ActionTypes from './actionTypes';

const initialState = {
    // user: {
    //     //taskName: 'Hello world',
    //     allTasks: ['task all','task 3'],


    // }

    user: {
        // allTasks: ['task 2', 'task 3','task 5'],
        taskName: '',
        date: '',
        time: '',


        completedTaskName: '',
        completedDate: '',
        completedTime: '',
        
        
    },
    // completedTasks: []

    

    
    
       

  
    
    
}

export const reducer = (state = initialState, action) => {

    switch(action.type)
    {
        case ActionTypes.ADD_TASK:
            // return{
            //     ...state, user: {...state.user, taskName: action.payload.taskName},
            // };
            

            return{

                ...state, user: {...state.user, taskName: action.payload.taskName, date: action.payload.text, time: action.payload.textTime},
                
                
            }

       
          case ActionTypes.COMPLETED_TASKS:
            return{
                  ...state, user: {...state.user, completedTaskName: action.payload.NowCompletedTaskName, completedDate: action.payload.NowCompletedTaskDate, completedTime: action.payload.NowCompletedTaskTime },
              } 

        
        
        default:
            return state;
    }

};