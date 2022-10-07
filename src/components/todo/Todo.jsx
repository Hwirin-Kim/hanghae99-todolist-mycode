import { useState } from "react";
import "./style.css";

function Todo({ a, todos, setTodos }) {
  const deleteTodo = () => {
    //삭제하기 버튼의 onclick함수, filter를 통해 a.id(list로부터 받아온 각각의 todo)와 콜백으로 불러온 todos의 각원소들의 id가 일치하는경우 그 원소 삭제
    let newDeleteTodo = todos.filter((todo) => {
      return a.id !== todo.id;
    });
    //필터링된 배열로 다시 setTodos를 이용해 todos를 변경함
    setTodos(newDeleteTodo);
  };

  //완료버튼의 onclick함수, map을 이용해 a.id(list에서 받아온 각각의 todo)와 콜백으로 불러온 todos의 각원소들의 id가 일치하는 경우를 찾아서 변경함
  const done = () => {
    let newDone = todos.map((todo) => {
      if (a.id === todo.id) {
        //콜백된 함수에 isDone을 원래값의 반대로 반환함( !todo.isDone  --> true는 false로 , false는 true로)
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newDone);
  };

  return (
    <div className="todo-container">
      <h3>{a.title}</h3>
      <p>{a.content}</p>
      <div className="todobtn">
        <button onClick={deleteTodo}>삭제하기</button>
        <button onClick={done}>{a.isDone === true ? "취소" : "완료"}</button>
      </div>
    </div>
  );
}
export default Todo;
