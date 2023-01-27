import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState({
      name:"", email:"",password:"",
    });
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
      }))
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
    };
    const resetState = () => {
      setIsSignup(!isSignup);
      setInputs({name:'',email:"",password:""})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
          display="flex" 
          flexDirection={"column"} 
          maxWidth={400} 
          alignItems="center"
          justifyContent={"center"} 
          margin="auto" 
          marginTop={3} 
          padding={3}
          borderRadius={5} 
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
                ":hover":{
                boxShadow:'10px 10px 20px #ccc',
              },
          }}
        >
          <Typography variant='h2' padding={3} textAlign='center'>
            {/* Changing the Header Typography */}
            {isSignup ? "Signup" : "Login"}
          </Typography>

            {/*Showing name text field if isSignup  */}
        {isSignup &&  <TextField onChange={handleChange} name="name"  value={inputs.name} margin='normal' type={'text'} variant='outlined' placeholder='Name' />}

          <TextField onChange={handleChange} name="email" value={inputs.email} margin='normal' type={'email'}  variant='outlined' placeholder='Email' />

          <TextField onChange={handleChange} name="password" value={inputs.password} margin='normal' type={'password'} variant='outlined' placeholder='Password' />

          <Button endIcon={isSignup ? <HowToRegIcon/> : <LoginIcon/>}
          type="submit"
          sx={{ marginTop: 3, borderRadius:3}} variant='contained' color='warning'>
            {isSignup ? "Signup" : "Login"}
          </Button>

          {/* Changing Go To Sign up and Login */}
          <Button endIcon={isSignup ?  <LoginIcon/> : <HowToRegIcon/> } 
          onClick={resetState} sx={{ marginTop: 3, borderRadius:3}}  color='primary'>Go to {isSignup ? "Login" : "Signup"}</Button>
        </Box>
      </form>
    </div>
  )
};

export default Auth;
