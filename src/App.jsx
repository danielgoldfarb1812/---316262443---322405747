import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useState } from 'react'
import AuthorizationContext from './Authorization/AuthorizationContext';
import LoginPage from './Components/LoginPage';
import RegistrationPage from './Components/RegistrationPage'
import AddNote from './Components/AddNote'
import Notes from './Components/Notes'
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  const [emailPassword, setEmailPassword] = useState({});
  const [notes, setNotes] = useState([]);
  return (
    <div className='app-comp'>
      <AuthorizationContext.Provider value={{ emailPassword, setEmailPassword, notes, setNotes }}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<RegistrationPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/AddNote' element={<AddNote />} />
            <Route path='/Notes' element={<Notes />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthorizationContext.Provider>
    </div>
  )
}

export default App;
