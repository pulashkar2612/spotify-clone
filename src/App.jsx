import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';


// const NOtFound = lazy(() => import('./components/Notfound)');

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/search' element={<h1>Search</h1>}/>
      <Route path='/genre/:id' element={<h1>Genre Search</h1>}/>
    </Routes>
  )
}

export default App
