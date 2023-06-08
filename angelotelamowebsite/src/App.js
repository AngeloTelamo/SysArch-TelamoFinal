import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import Jobs from './components/Pages/Jobs';
import SignUp from './components/Pages/SignUp';
import SignIn from './components/Pages/SignIn';



function App() {
  return (
    <>
      <Router>
         <Navbar/>
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/aboutUs' Component={AboutUs}/>
            <Route path='/jobs' Component={Jobs}/>
            <Route path='/sign-up' Component={SignUp}/>
            <Route path='/sign-up' Component={SignIn}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
