

import { register, resetStatus } from '../../../store/authSlice';
import Form from '../Form'
import { UserDataType } from '../types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Status } from '../../../globals/components/types/types';
// import axios from 'axios';

const Register = () => {
  const navigate = useNavigate()
  const { status} = useAppSelector((state)=>state.auth) //state vanni ghar aairako hunxa, tyo gharbata auth vanni room nikaleko.
  console.log(status);
  
  const dispatch = useAppDispatch()
  const handleRegister = async (data:UserDataType) => {
    // console.log(data);
    dispatch(register(data))
    // const response =  axios.post('http://localhost:3000/register', data)
  }




  useEffect(()=>{
    if(status === Status.SUCCESS){
      dispatch(resetStatus()) //setting the status to loading again. login page maa janu vanda pahile status loading banako
      navigate('/login')
    }else{
      alert("something went wrong.")
    }
  },[status, navigate, dispatch])




  return (
    <>
        <Form type = "register" onSubmit = {handleRegister} />
    </>
  )
}

export default Register