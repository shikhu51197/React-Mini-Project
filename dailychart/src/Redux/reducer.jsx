import {
    DELETE_TODO,
  EDIT_TODO,
  GET_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_ERROR,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  TOGGLE_TODO,
} from "./actiontypes";

const initialstate = {
  isload: false,
  iserror: false,
  todo: [],
};

export const reducer = (state = initialstate, action) => {
  const  { type, payload }=action;

  switch (type) {
    case GET_TODO_REQUEST:
      return { ...state, isload: true, iserror: false };
    case GET_TODO_SUCCESS:
      return { ...state, isload: false, iserror: false, todo: payload };
    case GET_TODO_ERROR:
      return { ...state, iserror: true, isload: false };
      case POST_TODO_REQUEST:
      return { ...state, isload: true, iserror: false };
    case POST_TODO_SUCCESS:
      return { ...state, isload: false, iserror: false, todo: payload };
    case POST_TODO_ERROR:
      return { ...state, iserror: true, isload: false };
      case DELETE_TODO:
        return { ...state, iserror: false, isload: false };
      case EDIT_TODO:
            return { ...state, iserror: false, isload: false ,todo:payload};
      case TOGGLE_TODO:
                return { ...state, iserror: false, isload: false };
    default:
      return state;
  }
};
