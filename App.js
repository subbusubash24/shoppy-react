import './App.css';
import Header from './components/Header/Header';
import ProductHolder from './components/productHolder/productHolder';
import Login from './components/login/login';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Mobile from './components/Mobile/Mobile';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  function login() {
    setIsLoggedIn(true)
  }
  function logout() {
    setIsLoggedIn(false)
  }
  return (
    <div className="App">
      <Header logout={logout} isLoggedIn={isLoggedIn}></Header>
      <Routes>
        <Route index element={isLoggedIn?<ProductHolder/>:<Login login={login}/>}/>
        <Route path='mobiles' element={isLoggedIn?<Mobile/>:<Login login={login}/>}/>
      </Routes>
    </div>
  );
}

export default App;
