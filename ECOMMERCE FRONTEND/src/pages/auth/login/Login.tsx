import { useNavigate } from "react-router-dom";
import Form from "../Form"
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { login, resetStatus } from "../../../store/authSlice";
import { useEffect } from "react";
import { Status } from "../../../globals/components/types/types";
import {  UserLoginType } from "../types";



const Login = () => {
  const navigate = useNavigate()
  const { status} = useAppSelector((state)=>state.auth) //state vanni ghar aairako hunxa, tyo gharbata auth vanni room nikaleko.
  // console.log(status);


    //yaha hooks.ts file maa type diyera banako hook lai call garko ho.usedispatch lai dispatch maa hold gareko.
  const dispatch = useAppDispatch()
  const handleLogin = async (data:UserLoginType) => {
    // console.log(data);
    dispatch(login(data))
    // const response =  axios.post('http://localhost:3000/register', data)
  }




  useEffect(()=>{
    if(status === Status.SUCCESS){
      dispatch(resetStatus()) //setting the status to loading again. login page maa janu vanda pahile status loading banako
      navigate('/')
    }
  },[status, navigate, dispatch])

  return (
    <>
        <Form type = "login" onSubmit={handleLogin} />
    </>
  )
}

export default Login