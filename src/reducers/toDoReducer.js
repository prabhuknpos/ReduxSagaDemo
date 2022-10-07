import { CREATE_NEW_TODO , REMOVE_TODO}  from '../actions/actionTypes';

const initState = {
    todoList : [
        {
            id:1,
            content:'Play Video Game'
        },
        {
            id:2,
            content:'Learn nodejs & react'
        },
        {
            id:3,
            content:'Join meetup event'
        }
    ]
}

const todoReducer = (state = initState, action) => {
    switch(action.type)
    {
        case CREATE_NEW_TODO:
           return {
            ...state,
            todoList:[
                ...state.todoList,
                action.payload
            ]
           }

         case REMOVE_TODO:
            return {
                ...state,
                todoList:action.payload
            }
            
         default:
            return state;   
    }
}

export default todoReducer;