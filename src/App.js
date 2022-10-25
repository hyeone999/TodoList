import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [todoData, setTodoData] = useState([]); // 첫 번째 인수 : 변수 이름, 두 번째 인수 State를 정하는 함수

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 할 일 데이터    
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    };

    // 원래 있던 할 일에 새로운 할 일 더하기
    setTodoData(prev => // prev: 함수(=>)를 사용해서 인수를 prev라는 것에 넣어준다 -> todoData의 값이 된다.
      [...prev, newTodo]); // 새로운 newTodo를 넣어준다.
    setValue("");
  };
  
    return(
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
          <div className="flex justify-between mb-3">
            <h1>Todo List</h1>
          </div>
          <List todoData={todoData} setTodoData={setTodoData} />
          <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
        </div>
      </div>
    );
}