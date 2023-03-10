import { Routes, Route } from 'react-router-dom';

import MainHeader from './components/MainHeader.js';
import Hours from './pages/Hours';
import Create from './pages/Create';
import Update from './pages/Update';
import Delete from './pages/Delete';

function App() {
  return (
    <div>
      <header>
        <MainHeader/>
      </header>
      <Routes>
        <Route path='/'/>
        <Route path='/hours'   element={<Hours/>}/>
        <Route path='/create'  element={<Create/>}/>
        <Route path='/update'  element={<Update/>}/>
        <Route path='/delete'  element={<Delete/>}/>
      </Routes>
    </div>
  );
}

export default App;
