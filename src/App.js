import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pagess/Home';
import Login from './pagess/Login';
import Signup from './pagess/Signup';
import Dashboard from './pagess/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';




function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="w-screen  h-screen flex  flex-col bg-black">
    
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/login' element={ <Login  setIsLoggedIn={setIsLoggedIn}  /> } />
    <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/> } />
    <Route path="/dashboard" element = {
      <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
      </PrivateRoute>
} />

    </Routes>
     
    </div>
  );
}

export default App;
