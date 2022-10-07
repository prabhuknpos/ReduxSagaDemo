import React from "react";
import "./App.css";
import 'antd/dist/antd.min.css';
import TodoList from "./views/TodoList";



function App() {
  return (
    <div className="todo-app">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
