import React from 'react';

import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './assets/styles/global.css';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
