import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/signin', {
        username,
        password,
      });

      console.log(response.data);
      // Handle success, redirect to the homepage
      navigate('/');
    } catch (error) {
      console.error(error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #304352, #d7d2cc)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <Typography component='h2' variant='h5'>
            Sign In
          </Typography>
          <form
            onSubmit={handleSignIn}
            style={{ width: '100%', marginTop: '20px' }}
          >
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
              style={{ marginTop: '20px' }}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
