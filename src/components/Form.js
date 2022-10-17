import React from "react";

export default function Form({ value, setValue, setTodoData }) {

    const handleChange = (e) => {
        setValue(e.target.value);
      }
    
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
        
  return (
    <div>
        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="value" 
            style={{ flex: '10', padding: '5px' }} 
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
             />
            <input 
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: '1' }}
             />
        </form>
    </div>
  )
}
