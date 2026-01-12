import { SET_TODO_INPUT, ADD_TODO } from "./constant";

const initialState = {
  todo: [],
  todoInput: ""
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload], //bảo lưu thằng cũ và thêm những giá trị mới vào tiếp theo
        todoInput: ""
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export { initialState };
export default reducer;