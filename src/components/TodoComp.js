import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from "react-icons/fa";

const TodoComp = (props) => {

  //Get todoList from todoReducer
  const todoList = useSelector(state => state.todos.todoList);
  //Get for all the dispatch actions
  const dispatch = useDispatch();

  const removeTodoItem = (todoId) => {
    //filter to get the todoId which need to be remove
    let newTodoList = todoList.filter(item => item.id != todoId);
    dispatch({type:'REMOVE_TODO', payload:newTodoList});
  }

  return (
  <li key={props.item.id} style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}> { props.item.content }
  <span onClick={() => {
    removeTodoItem(props.item.id)
  }}> <FaTrashAlt></FaTrashAlt></span>
 
  </li>
  )
}

export default TodoComp