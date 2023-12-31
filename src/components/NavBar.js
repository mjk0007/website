import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

const pages = ['', '', ''];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Function to navigate to the homepage
  const navigateToHome = () => {
    navigate('/');
    handleCloseNavMenu();
  };

  // Function to navigate to the upload page
  const navigateToUpload = () => {
    navigate('/upload');
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position='static'
      style={{ background: 'linear-gradient(to bottom, #304352, #d7d2cc)' }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <IconButton
              size='large'
              aria-label='menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              noWrap
              component={Link}
              to='/'
              sx={{
                mx: 'auto',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Design Boost
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().replace(' ', '-')}`}
                onClick={handleCloseNavMenu}
                sx={{ mx: 2, color: 'white' }}
              >
                {page}
              </Button>
            ))}
            <Button onClick={navigateToHome} sx={{ mx: 2, color: 'white' }}>
              Home
            </Button>
            <Button onClick={navigateToUpload} sx={{ mx: 2, color: 'white' }}>
              Upload
            </Button>
            <Button
              component={Link}
              to='/signin'
              onClick={handleCloseNavMenu}
              sx={{ mx: 2, color: 'white' }}
            >
              Sign In
            </Button>
            <Button
              component={Link}
              to='/signup'
              onClick={handleCloseNavMenu}
              variant='contained'
              sx={{ mx: 2, color: 'white', backgroundColor: '#304352' }}
            >
              Sign Up
            </Button>
          </Box>

          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().replace(' ', '-')}`}
                onClick={handleCloseNavMenu}
                sx={{ color: 'black', width: '100%', textAlign: 'left' }}
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={navigateToHome}
              sx={{ color: 'black', width: '100%', textAlign: 'left' }}
            >
              Home
            </Button>
            <Button
              onClick={navigateToUpload}
              sx={{ color: 'black', width: '100%', textAlign: 'left' }}
            >
              Upload
            </Button>
            <Button
              component={Link}
              to='/signin'
              target='_blank'
              onClick={handleCloseNavMenu}
              sx={{ mx: 2, color: 'white' }}
            >
              Sign In
            </Button>
            <Button
              component={Link}
              to='/signup'
              target='_blank'
              onClick={handleCloseNavMenu}
              variant='contained'
              sx={{ mx: 2, color: 'white', backgroundColor: '#304352' }}
            >
              Sign Up
            </Button>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
