import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './App';
import rootReducer from './modules';
import { actionCreators } from "./modules/auth"




const store = configureStore({
  reducer: rootReducer
});

const loadUser = () => {
  try {
    const user = localStorage.getItem('access');
    console.log("in loadUser");
    if (!user) return;

    store.dispatch(actionCreators.checkAuthAction());

  } catch(e) {
    console.log('localStorage is not working');
  }
}

loadUser();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
