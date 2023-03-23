import React,{ Fragment, useContext, useEffect, useState } from 'react';
import styles from './RecipeDetail.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import RecipeContext from "../../context/RecipeContext";
import {deleteRecipe} from '../../context/RecipeState';

const RecipeDetail = ()=>{

  var {id} = useParams();
  const [IsDeleteClicked,setIsDeleteClicked]=useState(false);
  const recipeContext = useContext(RecipeContext);
  const recipeList = recipeContext.RecipeList;
  const navigate = useNavigate();

  //find the recipe object for given id
  const recipeItem = recipeList.find(item => {  
                                      return item._id.toString()===id });
  
  const handleDelete = (e)=>{
    //console.log("delete ID:",e.target.value);
    setIsDeleteClicked(true);
  }

  useEffect(()=>{
    if(IsDeleteClicked===true){
      //console.log("delte button presses");
      deleteRecipe(recipeContext.dispatch,recipeItem._id);
      navigate(`/delete/${recipeItem._id}`);
    }
  })

  return(
      <div className={styles.container}>
        <Fragment>
      <button className={styles.deleteRecipe} value ={recipeItem._id} onClick={handleDelete}>
        <i className="fa fa-trash-o"></i> Delete
      </button>
      </Fragment>
      <h3 className={styles.recipeName}>{recipeItem.name}</h3><br/>
      <img className={styles.image} src={recipeItem.imageUrl}/>
      <h3>Ingredients:</h3>
      <p className={styles.description}>{recipeItem.ingredients}</p>
      <h3>Description:</h3>
      <p className={styles.description}>{recipeItem.description}</p>
    </div>
    
  )
}

export default RecipeDetail;

