import { useSelector } from "react-redux";
import Todo from "../todo/Todo";
//todos를 Layout으로부터 받아옴
function List() {
  const updateTodos = useSelector((state) => {
    return state.todos.todos;
  });
  console.log("abcd", updateTodos);
  return (
    <div className="listContainer">
      <h2>Working...🔥</h2>

      <div>
        {updateTodos?.map((a) => {
          console.log("아무거나");
          //todos에 연결된 투두객체들의 리스트를 맵함수로 반복시킴
          if (a.isDone === false) {
            return <Todo a={a} key={a.id} />; //props로 내려줄때 반드시 각각의 고유한 key를 보내줌 (index번호는 안됨, 참조하는 값이 달라져도 인지못함)
          } else {
            return null;
          }
        })}
      </div>
      <h2>Done..✔</h2>
      <div>
        {updateTodos?.map((a) => {
          if (a.isDone === true) {
            return <Todo a={a} key={a.id} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
export default List;
