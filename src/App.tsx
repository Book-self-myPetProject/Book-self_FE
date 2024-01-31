import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Categories } from './pages/Categories/Categories';
import { HomeLogged } from './pages/HomeLogged/HomeLogged';
import { PageNotFound } from './pages/PageNotFound/PageNorFound';
import { MyProfile } from './pages/MyProfile/MyProfile';
import { Calendar } from './pages/Calendar/Calendar';
import { CategoriesLogged } from './pages/CategoriesLogged/CategoriesLogged';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='categories' element={<Categories />} >
          <Route path=':category' element={<Categories />}/>
        </Route>
        <Route path='about' element={<About />} />
        <Route path='logged'>
          <Route path='home' element={<HomeLogged />} />
          <Route path='fav' element={<HomeLogged />} />
          <Route path='categories' element={<CategoriesLogged />} />
          <Route path='profile' element={<MyProfile />} />
          <Route path='calendar' element={<Calendar />} />
        </Route>
        <Route path='404' element={<PageNotFound />} />
        <Route path='*' element={<Navigate to='/home' />} />
        
      </Routes>
    </Router>
  );
}

export default App;
