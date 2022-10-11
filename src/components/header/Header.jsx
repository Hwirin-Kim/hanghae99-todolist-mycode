import React from "react";
import styled from "styled-components";
function Header() {
  const StHeader = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <StHeader>
      <div>My Todo List</div>
      <div>React</div>
    </StHeader>
  );
}
export default Header;
