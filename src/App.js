import { Routes, Route } from 'react-router-dom';

import MainHeader from './components/MainHeader.js';
// CSS lifted from "React the complete guide Section 20"
import './components/MainHeader.module.css';

function App() {
  return (
    <div>
      <header>
        <MainHeader/>
      </header>
      <Routes>
        <Route path='/'/>
        <Route path='/hours'/>
        <Route path='/create'/>
        <Route path='/update'/>
        <Route path='/delete'/>
      </Routes>
    </div>
  );
}

export default App;
