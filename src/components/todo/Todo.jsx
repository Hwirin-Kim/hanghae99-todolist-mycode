import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { delTodo, doneTodo } from "../../redux/modules/todos";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

function Todo({ a }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    return state.todos.todos;
  });

  const deleteTodo = (id) => {
    dispatch(delTodo(id));
  };

  const doneTodos = (id) => {
    dispatch(doneTodo(id));
  };

  const StTodoContainer = styled.div`
    border: 3px solid rgb(184, 170, 247);
    width: 250px;
    height: 150px;
    border-radius: 15px;
    padding: 3px 15px 5px 15px;
    margin: 10px;
  `;

  const StBtn = styled.button`
    border-radius: 10px;
    background-color: transparent;
    margin-right: 5px;
    border: 2px solid;
    border-color: rgb(184, 170, 247);
    height: 30px;
  `;

  return (
    <StTodoContainer>
      <Link to={`/detail/${a.id}`}>상세보기</Link>
      <h3>{a.title}</h3>
      <p>{a.content}</p>
      <div className="todobtn">
        <StBtn
          onClick={() => {
            deleteTodo(a.id);
          }}
        >
          삭제하기
        </StBtn>
        <StBtn
          onClick={() => {
            doneTodos(a.id);
          }}
        >
          {a.isDone === true ? "취소" : "완료"}
        </StBtn>
      </div>
    </StTodoContainer>
  );
}
export default Todo;
