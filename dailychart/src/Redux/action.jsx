import axios from "axios";
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

const get_todo_request = () => {
  return { type: GET_TODO_REQUEST };
};

const GET_TODO_Success = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};

const get_todo_ERROR = () => {
  return { type: GET_TODO_ERROR };
};

const post_todo_request = () => {
  return { type: POST_TODO_REQUEST };
};

const post_TODO_Success = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};

const post_todo_ERROR = () => {
  return { type: POST_TODO_ERROR };
};
export const gettodo = (payload) => (dispatch) => {
  dispatch(get_todo_request());
  axios
    .get("http://localhost:3004/Todo", payload)
    .then((res) => {
      dispatch(GET_TODO_Success(res.data));
    })
    .catch((err) => dispatch(get_todo_ERROR()));
};

export const addtodo = (payload) => (dispatch) => {
  dispatch(post_todo_request());
  axios
    .post("http://localhost:3004/Todo", payload)
    .then((res) => {
      console.log(res.data);
      dispatch(post_TODO_Success(payload));
    })
    .catch((err) => dispatch(post_todo_ERROR()));
};

export const deletetodo = (id) => (dispatch) => {
  return axios.delete(`http://localhost:3004/Todo/${id}`).then((res) => {
    dispatch({ type: DELETE_TODO });
  });
};

export const toggletodo = (id, status) => (dispatch) => {
  const payload = { status: status };
  return axios
    .patch(`http://localhost:3004/Todo/${id}`, payload)
    .then((res) => {
      dispatch({ type: TOGGLE_TODO });
    });
};

export const edittodo = (id, payload) => (dispatch) => {
  
  return axios.put(`http://localhost:3004/Todo/${id}`, payload).then((res) => {
    dispatch({ type: EDIT_TODO });
  });
};