import React, { useState } from "react";

import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import styled from "styled-components";

const Layout = () => {
  //투두리스트에서 사용할 리스트들을 저장할 상태를 todos란 스테이트로 선언
  // const [todos, setTodos] = useState([]);

  const StLayout = styled.div`
    max-width: 1200px;
    min-width: 800;
    margin: 0 auto;
    padding: 20px;
  `;
  return (
    <StLayout>
      <Header />
      <Form />
      <List />
    </StLayout>
  );
};
export default Layout;
