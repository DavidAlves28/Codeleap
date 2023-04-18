import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CAREERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_CAREER:
    case types.POST_CAREERS:
    case types.PUT_CAREERS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
export default usersReducers;
