import React,{useReducer} from "react";
import RecipeContext from "./RecipeContext";
import uuid from 'react-uuid';
import axios from "axios";
import RecipeReducer from './RecipeReducer';
import{
  GET_RECIPES,
  ADD_RECIPE,
  DELETE_RECIPE
} from './types';
export const getRecipes = async (dispatch) =>{
  try {
    const res = await axios.get('/api/recipe');
    dispatch({
      type:GET_RECIPES,
      payload:res.data
    });   
  } catch (err) {
    console.log(err.response.message);
  } 
}

export const addNewRecipe =async (dispatch,newReceipe)=>{

  console.log("AddRecipeToDB newReceipe name",newReceipe.name);
  //newReceipe.id=uuid();
  //console.log("UUID:",newReceipe.id)
  try {
    const config ={
      headers : {
        'Content-Type' : 'application/json'
      }
    }
    const res = await axios.post('/api/recipe',newReceipe,config);
    dispatch({type:"ADD_RECIPE",payload:res.data});  
  } catch (err) {
    console.log(err.response.message);    
  }
         
}

export  const deleteRecipe = async(dispatch,deleteRecipeID)=>{
  console.log("DeleteRecipeToDB  ID",deleteRecipeID);
  try {
    await axios.delete(`/api/recipe/${deleteRecipeID}`);
    dispatch({type:"DELETE_RECIPE",payload:deleteRecipeID});    
  } catch (err) {
    console.log(err.response.message);        
  }

}
const RecipeState = (props) =>{

  //Receipe List Initial state - array
  const initialState = {

    RecipeList :null
  };

    //initialise Reducer 

    const [state,dispatch] = useReducer(RecipeReducer,initialState);   

    return(
    <RecipeContext.Provider value ={{RecipeList:state.RecipeList,dispatch}}>
      {props.children}
    </RecipeContext.Provider>
    )
}

export default RecipeState;