import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loginfunc } from "../../Redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {useNavigate } from 'react-router';


const Login = () => {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const navigate = useNavigate()


  const {isAuth , userdata}= useSelector((store)=> store)
   console.log(isAuth, userdata)
   const dispatch = useDispatch()


// useEffect(()=> {
//    if(isAuth === true){
//     // toast.success('login success!')
//    }
// },[isAuth])

const checkEmailExists = async (Email,Pass) => {
  try {
    const response = await axios.get(`http://localhost:3004/users?Email=${Email}&Pass=${Pass}`);
    return response.data.length > 0;
  } catch (error) {
    console.error('Error checking email:', error);
    return false;
  }
};



  const handleLogin = async(e) => {
    e.preventDefault();
    // Perform login logic here
    dispatch(loginfunc ({Email, Pass}));
  
    const checkEmailPass = await checkEmailExists(Email , Pass)

    if(checkEmailPass){
      toast.success("Login Successful!")
      setTimeout(() => {
        navigate("/");
      }, 5000);
  
    
    }else {
      toast.error("Email , Password Not matched")
    }
  
    
  }

 
  return (
    <div>
      <Container bgColor={"yellow.100"} mt="100px" p="10" lineHeight={"10"}>
        <FormControl mt="10px" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            placeholder="Email"
            value={Email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mt="10px" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            value={Pass}
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />
        </FormControl>
        <Button mt="10px" colorScheme="green" onClick={handleLogin}>
          Login
        </Button>
      </Container>

      <ToastContainer position="top-right" />
    </div>
  );
};

export default Login;
