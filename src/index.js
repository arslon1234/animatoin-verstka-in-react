import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


// import { ThemeProvider } from './contex';
ReactDOM.render(
  // <ThemeProvider>
    <BrowserRouter>
  <App />
  </BrowserRouter>
  // </ThemeProvider>
    ,
  document.getElementById('root')
);

