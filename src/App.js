import React from 'react';
import Menu from './components/Menu'
import Routes from './routes'
import FooterSite from './components/FooterSite'
import './components/global.css'

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes />
      <FooterSite />
    </div>
  );
}

export default App;
