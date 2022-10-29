import React from "react";
import "./App.css";
import 'antd/dist/antd.min.css';
import UsersComp from "./component/UsersComp";



function App() {
  return (
    <div style={{textAlign:'center'}}>
     <h1 style={{fontSize:'2.5rem'}}>Redux SAGA Example </h1>

     <hr></hr>
     <UsersComp></UsersComp>
    </div>
  );
}

export default App;
