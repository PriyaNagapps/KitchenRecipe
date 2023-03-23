import React from 'react';
import DisplayRecipes from './DisplayRecipe/DisplayRecipes'


const Home = () =>
{
  return(
    <div>
      <h2 style = {{marginLeft:'10px', color:'white',fontStyle:'italic'}}>Recipes</h2>
      <DisplayRecipes />
    </div>
  )
} 
export default Home;