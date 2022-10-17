import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";


export default function App() {
  const [todoData, setTodoData] = useState([]); // 첫 번째 인수 : 변수 이름, 두 번째 인수 State를 정하는 함수
  const [value, setValue] = useState("");
  
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>Todo List</h1>
          </div>
          <List todoData={todoData} setTodoData={setTodoData} />
          <Form value={value} setValue={setValue} setTodoData={setTodoData} />
        </div>
      </div>
    );
}