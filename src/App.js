import React from 'react'
import { NavBar } from './components/NavBar';
import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { RecipeInfo } from './components/RecipeInfo';
import { Favourite } from './components/Favourite';

const App = () => {
  
  return (
    <div className='bg-teal-100 min-h-screen'>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/recipe-info/:id' element={<RecipeInfo/>}></Route>
        <Route path='/favourites' element={<Favourite/>}></Route>

      </Routes>
    </div> 
  )
}

export default App;
