import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { BrowserRouter} from "react-router-dom";
import Home from './Home/Home';
import AddRecipe from './AddRecipe/AddRecipe';
import Errorpage from './Errorpage';
import Navbar from './Navbar/Navbar';
import RecipeState from './context/RecipeState';
import RecipeDetail from './Home/RecipeDetail/RecipeDetail'
import DeleteRecipe from './Home/DeleteRecipe/DeleteRecipe'

function App() {
  return (
    
    <div className="App">
      <RecipeState>
      <div >
        <p className='App-header'>Clean and Delicious Kitchen</p>
      </div>
      <BrowserRouter>
        <div className='App-container'>
          <Navbar className='navItems'/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/AddRecipe" element={<AddRecipe/>}></Route>
            <Route path="/:id" element={<RecipeDetail/>}></Route>
            <Route path="/delete/:id" element={<DeleteRecipe/>}></Route>
            <Route path='*' element={<Errorpage/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      </RecipeState>
    </div>
   
  );
}

export default App;
