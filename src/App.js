import React from 'react';
import Header from './components/header/Header.react'
import AppRoute from './routes/routes'
import AuthProvider from "./providers/AuthProvider.react";
import './App.scss';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <AppRoute />
      </AuthProvider>
    </div>
  );
}

export default App;
