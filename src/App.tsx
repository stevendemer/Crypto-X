import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './components/Layout';
import {
  Home,
  Assets,
  ErrorPage,
  Charts,
  Exchanges,
  LoginPage
} from './pages';

import { config as configDotEnv } from 'dotenv';
import { resolve } from 'path';
import axios from 'axios';

// const API_KEY = process.env['COIN_API_KEY'];

const API_KEY = "9801704b4bd0881d6e2e3bd1702c4925";


function App() {


  // useEffect(() => {

  //   const fetchData = async () => {
  //       const resp = await axios.get(`http://api.coinlayer.com/api/live?access_key=${API_KEY}`);
  //       console.log(resp.data);
        
  //   }

  //   fetchData()
  //     .catch(console.error);


  // }, []);

  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Layout>
        </Layout>
      </>
  );
}

export default App
