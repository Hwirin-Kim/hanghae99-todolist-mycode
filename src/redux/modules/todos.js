//액션 생성 함수
const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const DONE_TODO = "DONE_TODO";

//액션 함수
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload,
  };
};

export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
    payload,
  };
};

//초기값
const initialState = { todos: [] };
// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, isDone: !todo.isDone }
            : { ...todo };
        }),
      };

    default:
      return state;
  }
};
export default todos;
