import React, { useContext, useEffect, useState } from 'react';
import RecipeContext from "../../context/RecipeContext";
import styles from './DisplayRecipe.module.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import {getRecipes} from '../../context/RecipeState';
import Spinner from "../Spinner";

const DisplayRecipes =() =>{
  const {RecipeList,dispatch} = useContext(RecipeContext);
  const [filterRecipeName,setfilterRecipeName] = useState('');
  // console.log("inside display.js");
  useEffect(()=>{
    getRecipes(dispatch);
  //  eslint-disable-next-line
  },[])
  var recipeList=(RecipeList!==null?(filterRecipeName===''?RecipeList:
                                    RecipeList.filter((item)=>
                                                  item.name.toLowerCase().includes(filterRecipeName.toLowerCase()))):null);;
 
  //filter recipes based on search crteria
  const handleChangeText=(e)=>{
    //console.log("inside change");
    if((e.target.value==='') &&(filterRecipeName!=='')){
      setfilterRecipeName('');
    }
    else{
      setfilterRecipeName(e.target.value);
    }
   // console.log("recipe list",recipeList);
  }

  return(
    <div className={styles.container}>
      <div>
        <input  className = {styles.inputBox} placeholder= "Search a recipe..." type ="text"
                onChange={handleChangeText}/>
      </div>
      <div className={styles.display}>
      {(recipeList!==null?
        recipeList.map(recipe =>(
        <RecipeCard key = {recipe._id} recipe={recipe}></RecipeCard>
        )) :(<Spinner/>))
      }
      </div>
    </div>
  )
}

export default DisplayRecipes