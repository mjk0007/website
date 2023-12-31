import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'; // Updated import

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Updated hook

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/signup', {
        username,
        password,
      });

      console.log(response.data);
      // Handle success, redirect to Sign In
      navigate('/signin');
    } catch (error) {
      console.error(error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h2' variant='h5'>
          Sign Up
        </Typography>
        <Box component='form' onSubmit={handleSignUp} sx={{ mt: 3 }}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            sx={{ mt: 3 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
