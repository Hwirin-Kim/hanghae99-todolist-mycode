import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import styled from "styled-components";

const Layout = () => {
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
