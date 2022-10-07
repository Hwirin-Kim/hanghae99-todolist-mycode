import React, { useState } from "react";
import "./style.css";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

const Layout = () => {
  //투두리스트에서 사용할 리스트들을 저장할 상태를 todos란 스테이트로 선언
  const [todos, setTodos] = useState([]);

  return (
    <div className="layout">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default Layout;
