import { types } from "./types/types.js";

const initialState = {
  createUser: {},
  showPage: true,
  usersList: {},
  message: {}
};

export const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.create:
      return {
        ...state,
        createUser: action.payload,
      };
    case types.show:
      return {
        ...state,
        showPage: action.payload,
      };
    case types.getUsers:
      return {
        ...state,
        usersList: action.payload,
      };
    case types.edit:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
