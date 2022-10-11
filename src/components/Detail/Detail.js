import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const StFlexContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const StContainer = styled.div`
    border: 1px solid rgb(184, 170, 247);
    width: 500px;
    height: 350px;
    border-radius: 30px;
    padding: 20px;
  `;

  const StNav = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
  `;

  const StBtn = styled.button`
    border-radius: 10px;
    background-color: transparent;
    margin-right: 10px;
    border: 1px solid;
    color: white;
    font-size: 15px;
    height: 35px;
    width: 100px;
    background-color: rgb(184, 170, 247);
  `;

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const param = useParams();
  console.log(param);
  const todos = useSelector((state) => {
    return state.todos.todos;
  });

  const todo = todos.filter((todo) => {
    return todo.id == param.id; //둘중 하나가 문자라서 삼중등호를 못썼음
  });
  console.log("투두", todo);

  return (
    <StFlexContainer>
      <StContainer>
        <StNav>
          <p>ID : {param.id}</p>
          <StBtn onClick={goBack}>이전으로</StBtn>
        </StNav>

        <h1>{todo[0].title}</h1>
        <p>{todo[0].content}</p>
      </StContainer>
    </StFlexContainer>
  );
}

export default Detail;
