import React ,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoComp from '../components/TodoComp';
import { Form,Input, Typography ,Button} from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const TodoList = () => {

  //Get todoList from todoReducer
  const todoList = useSelector(state => state.todos.todoList);

  const dispatch = useDispatch();

   //Local state for the input
   const [inputTodo,setInputTodo] =  useState('');
   //Local state for the input error message
   const [errMsg,setErrMsg] = useState('');
 
   //Handle onChange event
   const handleInput = (e)=>{
     setInputTodo(e.target.value);
   }

   //Handle onClick event
  const addNewTodo = ()=>{
    //Valid input value
    if(inputTodo.trim().length>1)
    {   
        setErrMsg('');
        let newTodoObject={
            id: Math.random(),
            content:inputTodo
        }
         //Add new todo item into List with the action
        dispatch({type:'CREATE_NEW_TODO',payload:newTodoObject});
        //Empty input 
        setInputTodo('');
    }
    else{
        //Display Error message
        setErrMsg('Please input something...');
    }

   
  }

  return (
    <div style={{
      display:" flex",
      flexDirection: "column",
      justifyContent: "start",
      width:" 520px",
      minHeight:" 600px",
      background: "#161a2b",
      textAlign: "center",
      margin: "128px auto",
      borderRadius: "10px",
      paddingBottom:" 32px"
    }}>
        
        <Typography>
          <Title level={2} style={{textAlign:"center",padding:"20px",color:'white'}}>TODO LIST</Title>
        </Typography>

       <Form labelCol={{span:16}} wrapperCol={{span:16}} style={{width:"780px"}} >      
       <Form.Item style={{}}>
       <Input onChange={handleInput} value={inputTodo} placeholder="Add todo..." id="todo-input" type="text" />
       </Form.Item>
       
       <Paragraph style={{color:'red'}}>
       {errMsg}
       </Paragraph>
       
       </Form>
       <Button type="primary"  onClick={addNewTodo} >Add</Button>
       
        {
            todoList.length>0?
            (<ul style={{color:'white',padding:"20px",listStyle:"none"}}>
            {
              todoList.map(item => {
                return <TodoComp key={item.id} item={item} />
               
              })
            }
          </ul>):
          (<Paragraph style={{color:'white'}}>You don't have anything to do! Awesome!</Paragraph>)
        }

    </div>
  )
}

export default TodoList