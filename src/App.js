import { Routes, Route } from 'react-router-dom';

import MainHeader from './components/MainHeader.js';
import Hours from './pages/Hours';
import Create from './pages/Create';

function App() {
  return (
    <div>
      <header>
        <MainHeader/>
      </header>
      <Routes>
        <Route path='/'/>
        <Route path='/hours/:storeId' element={<Hours/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update'/>
        <Route path='/delete'/>
      </Routes>
    </div>
  );
}

export default App;
