import { Routes, Route } from 'react-router-dom';

import MainHeader from './components/MainHeader.js';
import Hours from './pages/Hours';
import Create from './pages/Create';
import Update from './pages/Update';
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
        <Route path='/update/:storeId' element={<Update/>}/>
        <Route path='/delete/:storeId'/>
      </Routes>
    </div>
  );
}

export default App;
