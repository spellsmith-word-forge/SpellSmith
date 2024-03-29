import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpAsync } from '../reducers/authReducer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //dispatch the signUpAsync action to sign up the user
      await dispatch(signUpAsync({ email, password, name }));
      // Handle successful signup, e.g., redirect to another page
      navigate('/dashboard');
    } catch (error) {
      //handle signup error, e.g., display an error message
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        sx={{ width: '100%', mb: 4 }}
        label="username"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        sx={{ width: '100%', mb: 4 }}
        label="name"
        variant="outlined"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        sx={{ width: '100%', mb: 4 }}
        label="password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
