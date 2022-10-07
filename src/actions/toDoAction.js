import {CREATE_NEW_TODO,REMOVE_TODO} from './actionTypes';

export const createToDo = (todo) => {
    return {
        type:CREATE_NEW_TODO,
        payload:todo
    }
};

export const deleteToDo = (id) => {
    return {
        type:REMOVE_TODO,
        payload:id
    }
};