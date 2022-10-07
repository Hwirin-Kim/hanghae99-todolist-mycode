import React, { useState } from "react";

import "./style.css";

//ID값 입력해 줄 넘버
let number = 0;

//Layout으로부터 setTodos, todos를 props로 받아옴
function Form({ setTodos, todos }) {
  //초기화를 위한 초기상태를 선언
  const initialState = {
    id: undefined,
    title: "",
    content: "",
    isDone: false,
  };
  //투두리스트에 들어갈 각각의 투두를 스테이트에 저장하기 위해 useState 사용
  const [todo, setTodo] = useState(initialState);

  //Input에서 onChange된 값을 e.target.value형태로 name과 value를 받아옴
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    //todo를 Input에서 받아온 값으로 변경 ---> onchange가 발생할 때 마다 setTodo가 실행됨
    //여기서 name은 title과 content 두가지가 있으므로 대괄호로 감싸줌
    setTodo({ ...todo, [name]: value });
  };

  //추가하기 버튼의 onclick에 사용될 함수 선언
  const addButton = () => {
    //Todos 스테이트에 onchange로 받아온 todo를 추가함, id값도 각각 부여함
    setTodos([...todos, { ...todo, id: number }]);
    number = number + 1;
    //input창 초기화를 위해 Todos스테이트 변경 후 Todo를 초기화함
    setTodo(initialState);
  };

  return (
    <div className="form">
      <div className="input-group">
        <label>제목</label>
        <input
          type="text"
          onChange={onChangeHandler}
          //value를 onclick함수가 발동될때마다 초기화 시켜주기 위해 todo.title을 받아옴
          value={todo.title}
          name="title"
        ></input>
        <label>내용</label>
        <input
          type="text"
          onChange={onChangeHandler}
          //value를 onclick함수가 발동될때마다 초기화 시켜주기 위해 todo.content을 받아옴
          value={todo.content}
          name="content"
        ></input>
      </div>
      <button onClick={addButton}>추가하기</button>
    </div>
  );
}
export default Form;
