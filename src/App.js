import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from './components/NavBar';
import HomePage from './components/Homepage';
import Services from './components/services';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Upload from './components/Upload';

function App() {
  return (
    <Router>
      <div className='App'>
        <Appbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/upload' element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
