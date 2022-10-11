import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import styled from "styled-components";

const StForm = styled.div`
  background-color: rgb(220, 223, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-radius: 15px;
  padding-right: 20px;
  gap: 20px;
`;
const StInput = styled.input`
  height: 30px;
  width: 300px;
  border-radius: 10px;
  border: none;
`;

const StLabel = styled.label`
  font-size: 18px;
  margin-right: 10px;
  padding-left: 20px;
  font-weight: bold;
`;

const StBtn = styled.button`
  border: none;
  margin-right: 10px;
  border-radius: 10px;
  width: 90px;
  height: 30px;
  background-color: rgb(159, 95, 243);
  color: rgb(248, 248, 200);
  font-size: 15px;
`;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

let number = 0;

function Form() {
  const dispatch = useDispatch();
  const initialState = {
    id: undefined,
    title: "",
    content: "",
    isDone: false,
  };
  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const addButton = () => {
    dispatch(addTodo({ ...todo, id: number }));
    number = number + 1;
    setTodo(initialState);
  };

  return (
    <StForm>
      <StInputGroup>
        <StLabel>제목</StLabel>
        <StInput
          type="text"
          onChange={onChangeHandler}
          //value를 onclick함수가 발동될때마다 초기화 시켜주기 위해 todo.title을 받아옴
          value={todo.title}
          name="title"
        ></StInput>
        <StLabel>내용</StLabel>
        <StInput
          type="text"
          onChange={onChangeHandler}
          //value를 onclick함수가 발동될때마다 초기화 시켜주기 위해 todo.content을 받아옴
          value={todo.content}
          name="content"
        ></StInput>
      </StInputGroup>
      <StBtn onClick={addButton}>추가하기</StBtn>
    </StForm>
  );
}
export default Form;
