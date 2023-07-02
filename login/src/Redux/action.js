import axios from "axios";
import {
  GET_Login_Error,
  GET_Login_Success,
  GET_Login_request,
  GET_Singup_Error,
  GET_Singup_Success,
  GET_Singup_request,
  Reset,
} from "./actiontypes";

const get_singup_request = () => {
  return {
    type: GET_Singup_request,
  };
};

const get_singup_success = (payload) => {
  return {
    type: GET_Singup_Success,
    payload,
  };
};

const get_singup_Error = () => {
  return {
    type: GET_Singup_Error,
  };
};

const get_login_request = () => {
  return {
    type: GET_Login_request,
  };
};
const get_login_success = (payload) => {
  return {
    type: GET_Login_Success,
    payload,
  };
};

const get_login_Error = () => {
  return {
    type: GET_Login_Error,
  };
};

export const signupfunc =
  ({
    first: fname,
    lname: lname,
    Email: Email,
    Uname: Uname,
    Pass: Pass,
    CPass: CPass,
    Address: Address,
    mobileNumber: mobileNumber,
  }) =>
  (dispatch) => {
    dispatch(get_singup_request());
    axios
      .post("http://localhost:3004/users", {
        first: fname,
        lname: lname,
        Email: Email,
        Uname: Uname,
        Pass: Pass,
        CPass: CPass,
        Address: Address,
        mobileNumber: mobileNumber,
      })
      .then((res) => {
        console.log(res);
        dispatch(get_singup_success(res));
      })

      .catch((err) => dispatch(get_singup_Error()));
  };

export const loginfunc =
  ({ Email:Email, Pass:Pass }) =>
  (dispatch) => {
    dispatch(get_login_request());
    axios
      .get("http://localhost:3004/users", { Email:Email, Pass:Pass })
      .then((res) => {
        console.log(res);
        dispatch(get_login_success(res));
      })
      .catch((err) => dispatch(get_login_Error()));
  };
